// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import CreateRoom from './components/CreateRoom';
import Settings from './components/Settings';
import Sharenote from './components/Sharenote';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/createroom" element={<CreateRoom />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/sharenote" element={<Sharenote />} />
      </Routes>
    </Router>
  );
}

export default App;
