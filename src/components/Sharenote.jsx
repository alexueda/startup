import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./sharenote.css";

function Sharenote() {
  const location = useLocation();
  const navigate = useNavigate();
  const roomNumber = new URLSearchParams(location.search).get("roomNumber");
  const [tasks, setTasks] = useState([]);
  const [taskContent, setTaskContent] = useState("");
  const [taskPerson, setTaskPerson] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (roomNumber) {
      const fetchTasks = async () => {
        try {
          const response = await fetch(`/api/room/${roomNumber}/tasks`);
          if (response.ok) {
            const data = await response.json();
            setTasks(data.tasks);
          } else {
            setMessage("Failed to load tasks.");
          }
        } catch (error) {
          console.error("Error fetching tasks:", error);
          setMessage("Error fetching tasks.");
        }
      };

      fetchTasks();
    } else {
      navigate("/");
    }
  }, [roomNumber, navigate]);

  const handleAddTask = async (e) => {
    e.preventDefault();

    if (!taskContent || !taskPerson || !taskDate) {
      setMessage("All fields are required to add a task.");
      return;
    }

    try {
      const response = await fetch(`/api/room/${roomNumber}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: taskContent,
          person: taskPerson,
          date: taskDate,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setTasks(data.tasks);
        setTaskContent("");
        setTaskPerson("");
        setTaskDate("");
        setMessage("Task added successfully!");
      } else {
        const data = await response.json();
        setMessage(data.msg || "Failed to add task.");
      }
    } catch (error) {
      console.error("Error adding task:", error);
      setMessage("Error adding task.");
    }
  };

  const handleDeleteTask = async (taskId) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      try {
        const response = await fetch(`/api/room/${roomNumber}/tasks/${taskId}`, {
          method: "DELETE",
        });

        if (response.ok) {
          const data = await response.json();
          setTasks(data.tasks); // Update tasks list after deletion
          setMessage("Task deleted successfully!");
        } else {
          const data = await response.json();
          setMessage(data.msg || "Failed to delete task.");
        }
      } catch (error) {
        console.error("Error deleting task:", error);
        setMessage("Error deleting task.");
      }
    }
  };

  const handleToggleComplete = async (taskId) => {
    const updatedTask = tasks.find((task) => task.id === taskId);
    if (!updatedTask) return;

    try {
      const updatedTasks = tasks.map((task) =>
        task.id === taskId
          ? { ...task, complete: !task.complete }
          : task
      );
      setTasks(updatedTasks);
      setMessage("Task status updated successfully!");
    } catch (error) {
      console.error("Error updating task:", error);
      setMessage("Error updating task status.");
    }
  };

  return (
    <div className="sharenote-container">
      <header className="sharenote-header">
        <h1>Sharenote</h1>
        <nav>
          <ul className="sharenote-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/thirdpartyservices">Third Party Services</Link></li>
            <li><Link to="/websocket">WebSocket</Link></li>
          </ul>
        </nav>
      </header>

      <main className="sharenote-main">
        <h2>TO-DO List for Room {roomNumber}</h2>
        {message && <p className="message">{message}</p>}

        <div className="task-list">
          <div className="task-header">
            <span>Check</span>
            <span>Task</span>
            <span>Person</span>
            <span>Date</span>
            <span>Actions</span>
          </div>
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`task-item ${task.complete ? "complete" : "incomplete"}`}
            >
              <input
                type="checkbox"
                checked={task.complete}
                onChange={() => handleToggleComplete(task.id)}
              />
              <span className="task-content">{task.content}</span>
              <span className="task-person">{task.person}</span>
              <span className="task-date">{task.date}</span>
              <button
                className="delete-task-button"
                onClick={() => handleDeleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        <form className="task-form" onSubmit={handleAddTask}>
          <input
            type="text"
            placeholder="Enter task"
            value={taskContent}
            onChange={(e) => setTaskContent(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Your name"
            value={taskPerson}
            onChange={(e) => setTaskPerson(e.target.value)}
            required
          />
          <input
            type="date"
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            required
          />
          <button type="submit">Add Task</button>
        </form>
      </main>

      <footer className="sharenote-footer">
        <hr />
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

export default Sharenote;
