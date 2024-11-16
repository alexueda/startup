import React from "react";
import { Link } from "react-router-dom";
import "./about.css";

function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>Sharenote</h1>
        <nav>
          <ul className="about-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about" className="active">About</Link></li>
            <li><Link to="/createroom">Create Room</Link></li>
            <li><Link to="/sharenote">Sharenote</Link></li>
            <li><Link to="/thirdpartyservices">Third Party Services</Link></li>
            <li><Link to="/websocket">WebSocket</Link></li>
          </ul>
        </nav>
      </header>

      <main className="about-main">
        <section className="about-section">
          <h2>About Us</h2>
          <div className="about-picture-box">
            <img
              src="https://article-image-ix.imgix.net/https%3A%2F%2Fimgix-proxy.n8s.jp%2FDSXZQO3893831028092023000000-1.jpg?ixlib=js-3.8.0&w=638&h=425&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&auto=format%2Ccompress&s=001286ae7a10399795244bcf69b7b584"
              alt="Sharenote introduction"
            />
          </div>
          <p>
            Welcome to <strong>Sharenote</strong>, a simple and efficient platform designed to help you share to-do lists and notes with the people that matter most. Whether it's organizing tasks with your family or sharing important notes with friends, our platform allows you to create rooms where you can invite others to collaborate and stay on the same page.
          </p>
          <p>
            Our goal is to make it easier for you to manage daily tasks, set reminders, and share important information—all in one place. By inviting your family and friends, you can ensure everyone is up-to-date with what's happening, whether it's planning a family vacation, coordinating a project, or simply sharing a grocery list.
          </p>
          <p>
            Create your first room today and experience the simplicity and power of shared lists and notes with <strong>Sharenote</strong>!
          </p>
        </section>
      </main>

      <footer className="about-footer">
        <hr />
        <p>To access my GitHub:</p>
        <a
          href="https://github.com/alexueda/startup.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default About;
