import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import CreateRoom from './components/CreateRoom';
import Sharenote from './components/Sharenote';
import ThirdPartyServices from './components/ThirdPartyServices';
import Settings from './components/Settings';
import WebSocketPage from './components/WebSocket.jsx';
import './index.css'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/createroom" element={<CreateRoom />} />
        <Route path="/sharenote" element={<Sharenote />} />
        <Route path="/thirdparty" element={<ThirdPartyServices />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/websocket" element={<WebSocketPage />} />
      </Routes>
    </Router>
  );
}

export default App;
