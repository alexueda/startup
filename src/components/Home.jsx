import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
  const [roomNumber, setRoomNumber] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/room/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ roomNumber, password }),
      });

      if (response.ok) {
        setMessage("Login successful!");
        navigate(`/sharenote?roomNumber=${roomNumber}`);
      } else {
        const data = await response.json();
        setMessage(data.msg || "Login failed.");
      }
    } catch (error) {
      setMessage("Error logging in.");
    }
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Sharenote</h1>
        <nav>
          <ul className="home-nav">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/createroom">Create Room</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="home-main">
        <div className="home-card">
          <h2>Welcome to Sharenote</h2>
          <form onSubmit={handleLogin}>
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
            <button type="submit">Login</button>
          </form>
          {message && <p className="home-message">{message}</p>}
          <button
            className="create-room-button"
            onClick={() => navigate("/createroom")}
          >
            Create Room
          </button>
        </div>
      </main>
      <footer className="home-footer">
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

export default Home;
