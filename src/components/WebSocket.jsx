import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './websocket.css';

function NewWebSocket() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [personInput, setPersonInput] = useState('');
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const connectWebSocket = () => {
      const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
      const host = window.location.host;
      const wsUrl = `${protocol}://${host}/websocket`; // Updated WebSocket path

      const ws = new WebSocket(wsUrl);

      ws.onopen = () => {
        console.log('WebSocket connection established');
        setSocket(ws);
        setIsConnected(true);
      };

      ws.onmessage = (event) => {
        try {
          const msg = JSON.parse(event.data);
          console.log('Message received:', msg);
          setMessages((prev) => [...prev, msg]);
        } catch (error) {
          console.error('Error parsing WebSocket message:', error);
        }
      };

      ws.onerror = (error) => {
        console.error('WebSocket error:', error);
      };

      ws.onclose = () => {
        console.warn('WebSocket connection closed. Reconnecting in 5 seconds...');
        setIsConnected(false);

        // Retry connection after a delay
        setTimeout(() => connectWebSocket(), 5000);
      };

      return ws;
    };

    const ws = connectWebSocket();

    return () => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.close();
      }
    };
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!messageInput.trim() || !personInput.trim()) {
      alert('Both name and message are required.');
      return;
    }

    const newMessage = { person: personInput, text: messageInput };

    if (socket && socket.readyState === WebSocket.OPEN) {
      console.log('Sending message:', newMessage);
      socket.send(JSON.stringify(newMessage));
    } else {
      alert('WebSocket connection is not open. Please try again later.');
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
          </ul>
        </nav>
      </header>

      <main className="websocket-main">
        <section className="messaging">
          <h2>Send a Message</h2>
          {!isConnected && <p>Connecting to WebSocket...</p>}
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
    </div>
  );
}

export default NewWebSocket;
