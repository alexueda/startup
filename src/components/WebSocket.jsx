import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function WebSocket() {
  const [messages, setMessages] = useState([
    { person: 'Alex', text: 'Don’t forget the documents!' }
  ]);

  const [logMessages, setLogMessages] = useState([
    'Alison added a new task: "Prepare for meeting."'
  ]);

  const [messageInput, setMessageInput] = useState('');
  const [personInput, setPersonInput] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newMessage = { person: personInput, text: messageInput };
    const newLogMessage = `${personInput} sent a message: "${messageInput}".`;

    setMessages([...messages, newMessage]);
    setLogMessages([...logMessages, newLogMessage]);

    setMessageInput('');
    setPersonInput('');
  };

  return (
    <div className="container">
      <header>
        <h1>Task Management</h1>
        <p>Real-time log and messaging</p>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/createroom">Create Room</Link></li>
            <li><Link to="/sharenote">Sharenote</Link></li>
            <li><Link to="/websocket">WebSocket</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <h2>Activity Log</h2>
          <ul id="log-messages">
            {logMessages.map((log, index) => (
              <li key={index}>{log}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Leave a Message</h2>
          <ul id="message-list">
            {messages.map((message, index) => (
              <li key={index}><strong>{message.person}:</strong> {message.text}</li>
            ))}
          </ul>
          <form id="message-form" onSubmit={handleFormSubmit}>
            <input
              type="text"
              id="message-input"
              placeholder="Message"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              required
            />
            <input
              type="text"
              id="message-person-input"
              placeholder="Name"
              value={personInput}
              onChange={(e) => setPersonInput(e.target.value)}
              required
            />
            <button type="submit">Send</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Task Management | <a href="https://github.com/alexueda/startup.git" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </footer>
    </div>
  );
}

export default WebSocket;
