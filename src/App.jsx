import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import CreateRoom from './components/CreateRoom';
import Settings from './components/Settings';
import Sharenote from './components/Sharenote';
import ThirdPartyServices from './components/ThirdPartyServices';
import WebSocket from './components/WebSocket';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);
  const [message, setMessage] = useState('');

  // Function to create a new user
  const handleCreateAccount = async () => {
    try {
      const response = await fetch('/api/auth/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        setToken(data.token);
        setMessage('Account created successfully!');
      } else {
        setMessage('Failed to create account.');
      }
    } catch (error) {
      console.error('Error creating account:', error);
      setMessage('Error creating account.');
    }
  };

  // Function to log in an existing user
  const handleLogin = async () => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        setToken(data.token);
        setMessage('Logged in successfully!');
      } else {
        setMessage('Failed to log in.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setMessage('Error logging in.');
    }
  };

  return (
    <Router>
      <div className="App">
        <header>
          <h1>Sharenote</h1>
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
        </header>

        <main>
          <h2>Account Management</h2>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleCreateAccount}>Create Account</button>
            <button onClick={handleLogin}>Log In</button>
          </div>
          {message && <p>{message}</p>}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/createroom" element={<CreateRoom />} />
            <Route path="/sharenote" element={<Sharenote />} />
            <Route path="/thirdpartyservices" element={<ThirdPartyServices />} />
            <Route path="/websocket" element={<WebSocketPage />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;