import React from 'react';
import '../App.css';

import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className="App">
      <div className="homecard">
        <img src="/images/allbeers.jpg" alt=""></img>
        <Link to="/beers">
          <h2>Browse all beers</h2>
        </Link>
        <p>Lorem ipsum sit dolor amet.</p>
      </div>

      <div className="homecard">
        <img src="/images/randombeer.jpg" alt=""></img>
        <Link to="/Randombeer">
          <h2>Discover a random beer</h2>
        </Link>
        <p>Lorem ipsum sit dolor amet.</p>
      </div>

      <div className="homecard">
        <img src="/images/newbeer.jpg" alt=""></img>
        <Link to="/Newbeer">
          <h2>Add your favorite beer</h2>
        </Link>
        <p>Lorem ipsum sit dolor amet.</p>
      </div>
    </div>
  );
}

export default Homepage;
