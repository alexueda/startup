import React from 'react';
import { Link } from 'react-router-dom';
import './third.css';

function ThirdPartyServices() {
  return (
    <div className="third-container">
      <header className="third-header">
        <h1>Sharenote</h1>
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

      <main className="third-main">
        <h2>Third-Party Services Integration</h2>
        <p>Enhance your Sharenote experience by connecting with third-party services.</p>

        <div className="third-services">
          <div className="third-service-card">
            <h3>Google Calendar</h3>
            <p>Sync your events and stay organized with timely reminders.</p>
            <a
              href="https://calendar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="third-service-link"
            >
              Connect
            </a>
          </div>

          <div className="third-service-card">
            <h3>Google Docs</h3>
            <p>Manage and collaborate on tasks directly from your documents.</p>
            <a
              href="https://docs.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="third-service-link"
            >
              Connect
            </a>
          </div>
        </div>
      </main>

      <footer className="third-footer">
        <p>
          Connect with us on GitHub:{" "}
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

export default ThirdPartyServices;
