import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import CreateRoom from './components/CreateRoom';
import Settings from './components/Settings';
import Sharenote from './components/Sharenote';
import ThirdPartyServices from './components/ThirdPartyServices';
import WebSocket from './components/WebSocket';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/createroom" element={<CreateRoom />} />
        <Route path="/sharenote" element={<Sharenote />} />
        <Route path="/thirdpartyservices" element={<ThirdPartyServices />} />
        <Route path="/websocket" element={<WebSocket />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
