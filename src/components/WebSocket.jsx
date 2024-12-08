import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './websocket.css';

function WebSocketPage() {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [logMessages, setLogMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [personInput, setPersonInput] = useState('');

  useEffect(() => {
    // Connect to WebSocket server
    const ws = new WebSocket('ws://localhost:4000');
    setSocket(ws);

    // Handle incoming messages
    ws.onmessage = (event) => {
      const data = event.data;
      setMessages((prev) => [...prev, { person: 'Server', text: data }]);
      setLogMessages((prev) => [...prev, `Server: ${data}`]);
    };

    // Handle WebSocket errors
    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    // Handle WebSocket close
    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    // Cleanup on component unmount
    return () => {
      ws.close();
    };
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!messageInput.trim() || !personInput.trim()) {
      alert('Both name and message are required.');
      return;
    }

    const message = `${personInput}: ${messageInput}`;

    // Send message to WebSocket server
    if (socket) {
      socket.send(message);
      setMessages((prev) => [...prev, { person: personInput, text: messageInput }]);
      setLogMessages((prev) => [
        ...prev,
        `You (${personInput}) sent a message: "${messageInput}".`,
      ]);
    }

    setMessageInput('');
    setPersonInput('');
  };

  return (
    <div className="websocket-container">
      <header className="websocket-header">
        <h1>Sharenote</h1>
        <nav>
          <ul className="websocket-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/createroom">Create Room</Link></li>
            <li><Link to="/sharenote">Sharenote</Link></li>
            <li><Link to="/thirdpartyservices">Third Party Services</Link></li>
          </ul>
        </nav>
      </header>

      <main className="websocket-main">
        <section className="activity-log">
          <h2>Activity Log</h2>
          {logMessages.length === 0 ? (
            <p>No activity log available.</p>
          ) : (
            <ul className="log-list">
              {logMessages.map((log, index) => (
                <li key={index}>{log}</li>
              ))}
            </ul>
          )}
        </section>

        <section className="messaging">
          <h2>Send a Message</h2>
          {messages.length === 0 ? (
            <p>No messages available.</p>
          ) : (
            <ul className="message-list">
              {messages.map((message, index) => (
                <li key={index}>
                  <strong>{message.person}:</strong> {message.text}
                </li>
              ))}
            </ul>
          )}
          <form className="message-form" onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={personInput}
              onChange={(e) => setPersonInput(e.target.value)}
              required
            />
            <textarea
              placeholder="Message"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              required
            />
            <button type="submit">Send</button>
          </form>
        </section>
      </main>

      <footer className="websocket-footer">
        <p>
          Connect with us on GitHub:{' '}
          <a
            href="https://github.com/alexueda/startup.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default WebSocketPage;
