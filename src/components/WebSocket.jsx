import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './websocket.css';

function newWebSocket() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [personInput, setPersonInput] = useState('');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:4000');

    setSocket(ws);

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      setMessages((prev) => [...prev, msg]);
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    ws.onclose = () => {
      console.warn('WebSocket connection closed');
    };

    return () => ws.close();
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!messageInput.trim() || !personInput.trim()) {
      alert('Both name and message are required.');
      return;
    }

    const newMessage = { person: personInput, text: messageInput };

    if (socket && socket.readyState === WebSocket.OPEN) {
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

export default newWebSocket;


