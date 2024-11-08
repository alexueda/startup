import React from 'react';
import { Link } from 'react-router-dom';
import "./sharenote.css";

function Sharenote() {
  return (
    <div className="page-container">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/createroom">Create Room</Link></li>
          <li><Link to="/thirdpartyservices">Third Party Services</Link></li>
          <li><Link to="/websocket">Websocket</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>

      <header>
        <h1>Sharenote</h1>
      </header>

      <main>
        <h2>TO-DO List</h2>
        <div className="task-list">
          <div className="task-header">
            <span className="task-content-header">Content</span>
            <span className="task-person-header">Person</span>
            <span className="task-date-header">Date</span>
          </div>
          <div className="task-item incomplete">
            <span className="task-status">🔴</span>
            <span className="task-content">Example 1</span>
            <span className="task-person">Alex</span>
            <span className="task-date">2024-09-22</span>
          </div>
          <div className="task-item complete">
            <span className="task-status">🟢</span>
            <span className="task-content">Example 2</span>
            <span className="task-person">Alex</span>
            <span className="task-date">2024-09-20</span>
          </div>
          <div className="task-item incomplete">
            <span className="task-status">🔴</span>
            <span className="task-content">Example 3</span>
            <span className="task-person">Alison</span>
            <span className="task-date">2024-09-24</span>
          </div>
          <div className="task-item incomplete">
            <span className="task-status">🔴</span>
            <span className="task-content">Example 4</span>
            <span className="task-person">Alison</span>
            <span className="task-date">2024-09-23</span>
          </div>
          <div className="task-item complete">
            <span className="task-status">🟢</span>
            <span className="task-content">Example 5</span>
            <span className="task-person">Alison</span>
            <span className="task-date">2024-09-25</span>
          </div>
        </div>

        <form id="add-task-form">
          <label htmlFor="new-task">Add Task:</label>
          <input type="text" id="new-task" name="new-task" placeholder="Enter your task" required />
          <input type="text" id="task-person" name="task-person" placeholder="Enter your name" required />
          <input type="date" id="task-date" name="task-date" required />
          <button type="submit">Add Task</button>
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

export default Sharenote;
