const { WebSocketServer } = require('ws');

function peerProxy(httpServer) {
  const wss = new WebSocketServer({ server: httpServer });

  wss.on('connection', (ws) => {
    console.log('WebSocket client connected');

    ws.on('message', (message) => {
      console.log('Received:', message);

      wss.clients.forEach((client) => {
        if (client.readyState === 1) {
          client.send(`Echo: ${message}`);
        }
      });
    });

    ws.on('close', () => {
      console.log('WebSocket client disconnected');
    });

    ws.send('Welcome to the WebSocket server!');
  });

  console.log('WebSocket server is running');
}

module.exports = { peerProxy };
