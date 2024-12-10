import { v4 as uuidv4 } from 'uuid';
import { WebSocketServer } from 'ws';

function peerProxy(httpServer) {
  const wss = new WebSocketServer({ noServer: true });

  httpServer.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (ws) => {
      wss.emit('connection', ws, request);
    });
  });

  const connections = [];

  wss.on('connection', (ws) => {
    const connection = { id: uuidv4(), ws, alive: true };
    connections.push(connection);
    console.log(`New connection established: ${connection.id}`);

    ws.on('message', (message) => {
      try {
        const msg = JSON.parse(message);
        connections.forEach((conn) => {
          if (conn.id !== connection.id) {
            conn.ws.send(JSON.stringify(msg));
          }
        });
      } catch (error) {
        console.error('Error parsing WebSocket message:', error);
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

  setInterval(() => {
    connections.forEach((conn) => {
      if (!conn.alive) {
        console.log(`Terminating inactive connection: ${conn.id}`);
        return conn.ws.terminate();
      }
      conn.alive = false;
      conn.ws.ping();
    });
  }, 30000);
}

export { peerProxy };

