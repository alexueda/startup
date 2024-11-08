import React from 'react';
import { Link } from 'react-router-dom';

function CreateRoom() {
  return (
    <div className="page-container">
      {/* Header */}
      <header>
        <h1>Sharenote</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sharenote">Sharenote</Link></li>
            <li><Link to="/createroom">Create Room</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <h2>Create a New Room</h2>
        <p>Enter the details to create a new room and start sharing notes.</p>
        <form>
          <div>
            <label htmlFor="room-name">Room Name:</label>
            <input type="text" id="room-name" name="roomName" placeholder="Enter room name" required />
          </div>
          <div>
            <label htmlFor="room-password">Password:</label>
            <input type="password" id="room-password" name="roomPassword" placeholder="Enter password" required />
          </div>
          <button type="submit">Create Room</button>
        </form>
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

export default CreateRoom;
