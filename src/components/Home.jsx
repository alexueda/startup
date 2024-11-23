import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
        setTimeout(() => navigate(`/sharenote?roomNumber=${roomNumber}`), 500);
      } else {
        const data = await response.json();
        setMessage(data.msg || "Login failed. Please check your credentials.");
      }
    } catch (error) {
      setMessage("Error logging in. Please try again later.");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Sharenote</h1>
        <nav>
          <ul className="home-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/createroom">Create Room</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="home-main">
        <div className="home-card">
          <h2>Welcome to Sharenote</h2>
          <form onSubmit={handleLogin} className="login-form">
            <label htmlFor="room-number">Room Number</label>
            <input
              id="room-number"
              type="text"
              placeholder="Enter Room Number"
              value={roomNumber}
              onChange={(e) => setRoomNumber(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="login-button">
              Login
            </button>
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
          Visit us on GitHub:{" "}
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