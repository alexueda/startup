import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sharenote.css';

function Sharenote() {
  const [tasks, setTasks] = useState([
    { content: 'Example 1', person: 'Alex', date: '2024-09-22', complete: false },
    { content: 'Example 2', person: 'Alison', date: '2024-09-24', complete: true },
  ]);

  const [taskContent, setTaskContent] = useState('');
  const [taskPerson, setTaskPerson] = useState('');
  const [taskDate, setTaskDate] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskContent && taskPerson && taskDate) {
      const newTask = {
        content: taskContent,
        person: taskPerson,
        date: taskDate,
        complete: false,
      };
      setTasks([...tasks, newTask]);
      setTaskContent('');
      setTaskPerson('');
      setTaskDate('');
    }
  };

  return (
    <div className="page-container">
      <header>
        <h1>Sharenote</h1>
      </header>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/createroom">Create Room</Link></li>
          <li><Link to="/thirdpartyservices">Third Party Services</Link></li>
          <li><Link to="/websocket">WebSocket</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>

      <main>
        <h2>TO-DO List</h2>
        <div className="task-list">
          <div className="task-header">
            <span className="task-content-header">Content</span>
            <span className="task-person-header">Person</span>
            <span className="task-date-header">Date</span>
          </div>
          {tasks.map((task, index) => (
            <div key={index} className={`task-item ${task.complete ? 'complete' : 'incomplete'}`}>
              <span className="task-status">{task.complete ? '🟢' : '🔴'}</span>
              <span className="task-content">{task.content}</span>
              <span className="task-person">{task.person}</span>
              <span className="task-date">{task.date}</span>
            </div>
          ))}
        </div>

        <form id="add-task-form" onSubmit={handleAddTask}>
          <label htmlFor="new-task">Add Task:</label>
          <input
            type="text"
            id="new-task"
            name="new-task"
            placeholder="Enter your task"
            value={taskContent}
            onChange={(e) => setTaskContent(e.target.value)}
            required
          />
          <input
            type="text"
            id="task-person"
            name="task-person"
            placeholder="Enter your name"
            value={taskPerson}
            onChange={(e) => setTaskPerson(e.target.value)}
            required
          />
          <input
            type="date"
            id="task-date"
            name="task-date"
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            required
          />
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
