import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./createroom.css";

function CreateRoom() {
  const [roomNumber, setRoomNumber] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleCreateRoom = async (e) => {
    e.preventDefault();

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
        navigate("/");
      } else {
        const data = await response.json();
        setMessage(data.msg || "Failed to create room.");
      }
    } catch (error) {
      setMessage("Error creating room.");
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
              placeholder="Room Number"
              value={roomNumber}
              onChange={(e) => setRoomNumber(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
