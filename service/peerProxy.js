import { v4 as uuidv4 } from 'uuid';
import { WebSocketServer } from 'ws';

function peerProxy(httpServer) {
  const wss = new WebSocketServer({ noServer: true });

  // Upgrade HTTP requests to WebSocket only if they match the /websocket path
  httpServer.on('upgrade', (request, socket, head) => {
    const { url } = request;
    if (url === '/websocket') {
      wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit('connection', ws, request);
      });
    } else {
      socket.destroy(); // Reject other upgrade requests
    }
  });

  const connections = [];

  wss.on('connection', (ws) => {
    const connection = { id: uuidv4(), ws, alive: true };
    connections.push(connection);
    console.log(`New WebSocket connection established: ${connection.id}`);

    ws.on('message', (message) => {
      try {
        const parsedMessage = JSON.parse(message);
        console.log(`Message received from ${connection.id}:`, parsedMessage);

        // Broadcast the message to all other connected clients
        connections.forEach((conn) => {
          if (conn.id !== connection.id && conn.ws.readyState === conn.ws.OPEN) {
            conn.ws.send(JSON.stringify(parsedMessage));
            console.log(`Broadcasted message to ${conn.id}`);
          }
        });
      } catch (error) {
        console.error(`Error parsing message from ${connection.id}:`, error);
      }
    });

    ws.on('close', () => {
      console.log(`Connection closed: ${connection.id}`);
      const index = connections.findIndex((conn) => conn.id === connection.id);
      if (index >= 0) connections.splice(index, 1);
    });

    ws.on('error', (error) => {
      console.error(`WebSocket error on connection ${connection.id}:`, error);
    });

    ws.on('pong', () => {
      connection.alive = true;
    });
  });

  // Heartbeat mechanism to keep connections alive
  setInterval(() => {
    connections.forEach((conn) => {
      if (!conn.alive) {
        console.log(`Terminating inactive connection: ${conn.id}`);
        conn.ws.terminate();
        return;
      }
      conn.alive = false;
      conn.ws.ping(); // Send ping to the client
    });
  }, 30000);

  console.log('WebSocket server initialized.');
}

export { peerProxy };
