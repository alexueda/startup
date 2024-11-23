import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./createroom.css";

function CreateRoom() {
  const [formData, setFormData] = useState({ roomNumber: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCreateRoom = async (e) => {
    e.preventDefault();
    const { roomNumber, password } = formData;

    if (!roomNumber || !password) {
      setMessage("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("/api/room/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ roomNumber, password }),
      });

      if (response.ok) {
        setMessage("Room created successfully!");
        setTimeout(() => navigate("/"), 1500);
      } else {
        const data = await response.json();
        setMessage(data.msg || "Failed to create room.");
      }
    } catch (error) {
      console.error("Error creating room:", error);
      setMessage("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="createroom-container">
      <header className="createroom-header">
        <h1>Sharenote</h1>
        <nav>
          <ul className="createroom-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="createroom-main">
        <div className="createroom-card">
          <h2>Create a Room</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              name="roomNumber"
              placeholder="Room Number"
              value={formData.roomNumber}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit">Create Room</button>
          </form>
          {message && <p className="createroom-message">{message}</p>}
        </div>
      </main>
      <footer className="createroom-footer">
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

export default CreateRoom;