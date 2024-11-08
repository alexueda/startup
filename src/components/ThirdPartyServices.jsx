import React from 'react';
import { Link } from 'react-router-dom';
import './third.css';

function ThirdPartyServices() {
  const handleGoogleCalendarConnect = () => {
    alert('Connecting to Google Calendar...');
  };

  const handleGoogleDocsConnect = () => {
    alert('Connecting to Google Docs...');
  };

  return (
    <div className="page-container">
      <header>
        <h1>Sharenote</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/createroom">Create Room</Link></li>
            <li><Link to="/sharenote">Sharenote</Link></li>
            <li><Link to="/thirdpartyservices">Third Party Services</Link></li>
            <li><Link to="/websocket">Websocket</Link></li>
          </ul>
        </nav>
      </header>

      <main id="third-party">
        <h2>Third-Party Services Integration</h2>
        <p>
          This section allows you to connect with external services to enhance your experience on Sharenote. The integrations below will help you manage your tasks and schedules effectively.
        </p>

        <div className="alert">
          <strong>Currently Supported Integrations:</strong>
          <ul>
            <li>
              <strong>Google Calendar:</strong> <a href="https://workspace.google.com/intl/en-US/products/calendar/" target="_blank" rel="noopener noreferrer">Sync your events</a> to stay organized and receive timely reminders.
            </li>
            <li>
              <strong>Google Docs:</strong> <a href="https://workspace.google.com/products/docs/" target="_blank" rel="noopener noreferrer">Link your documents</a> to manage and collaborate on tasks directly from your workspace.
            </li>
          </ul>
          <p>More integrations are coming soon! Stay tuned to get access to other popular tools that work seamlessly with Sharenote.</p>
        </div>

        <button onClick={handleGoogleCalendarConnect}>Connect to Google Calendar</button>
        <button onClick={handleGoogleDocsConnect}>Connect to Google Docs</button>
      </main>

      <footer>
        <hr />
        <p>
          Connect with us on GitHub:{" "}
          <a href="https://github.com/alexueda/startup.git" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default ThirdPartyServices;
