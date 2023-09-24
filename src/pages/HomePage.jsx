// src/pages/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; // Import your CSS file for styling

function HomePage() {
  return (
    <div className="home-page">
      <div className="home-content">
        <h1>Welcome to Beer App</h1>
        <p>Discover and enjoy a wide variety of beers.</p>

        <div className="page-links">
          <Link to="/beers" className="page-link">
            <img src="/images/all-beers.jpg" alt="All Beers" />
            <p>All Beers</p>
          </Link>

          <Link to="/random-beer" className="page-link">
            <img src="/images/random-beer.jpg" alt="Random Beer" />
            <p>Random Beer</p>
          </Link>

          <Link to="/new-beer" className="page-link">
            <img src="/images/new-beer.jpg" alt="New Beer" />
            <p>New Beer</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;