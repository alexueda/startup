import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page-container">
      <header>
        <h1>Sharenote</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/createroom">Create Room</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <h1>Welcome to Sharenote</h1>
        <form method="get" action="/play">
          <div>
            <input type="text" placeholder="Room-number" />
          </div>
          <div>
            <input type="password" placeholder="Password" />
          </div>
          <button type="submit">Login</button>
          <button type="submit" style={{ marginLeft: '10px' }}>Create</button>
        </form>
      </main>

      <footer>
        <hr />
        <span className="text-reset">To access alexueda's Github below:</span>
        <br />
        <a href="https://github.com/alexueda/startup.git" target="_blank" rel="noopener noreferrer">GitHub</a>
      </footer>
    </div>
  );
}

export default Home;
