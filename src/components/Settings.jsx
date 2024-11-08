import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Settings() {
  const [showMembers, setShowMembers] = useState(false);

  const checkRoomMembers = () => {
    setShowMembers(!showMembers);
  };

  const deleteTaskList = () => {
    alert("Task list deleted.");
  };

  const closeRoom = () => {
    alert("Room closed.");
  };

  const changeRoomName = () => {
    const newName = prompt("Enter the new room name:");
    if (newName) {
      alert("Room name changed to " + newName + ".");
    }
  };

  return (
    <div className="page-container">
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
        <h2>Settings</h2>
        <p>Manage your room settings and members here.</p>

        <div className="setting-options">
          <button onClick={checkRoomMembers}>Check Room Members</button>
          <button onClick={deleteTaskList}>Delete Task List</button>
          <button onClick={closeRoom}>Close Room</button>
          <button onClick={changeRoomName}>Change Room Name</button>
        </div>

        {showMembers && (
          <section id="example-members">
            <h3>Room Members</h3>
            <ul>
              <li>Alex (Owner)</li>
              <li>Alison (Member)</li>
              <li>John (Member)</li>
              <li>Emma (Member)</li>
            </ul>
          </section>
        )}
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

export default Settings;
