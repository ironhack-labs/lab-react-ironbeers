import React from "react";
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="main-container">
      <Link to="/beers">
        <div>
          <img src="src/assets/beers.png" alt="All Beers" />
          <h2>All Beers</h2>
          <p>Description for all beers</p>
        </div>
      </Link>

      <Link to="/random-beer">
        <div>
          <img src="src/assets/random-beer.png" alt="Random Beer" />
          <h2>Random Beer</h2>
          <p>Description for random beer</p>
        </div>
      </Link>

      <Link to="/new-beer">
        <div>
          <img src="src/assets/new-beer.png" alt="New Beer" />
          <h2>New Beer</h2>
          <p>Description for new beer</p>
        </div>
      </Link>
    </div>
    );
}

export default HomePage;