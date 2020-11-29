import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="homepage-links">
      <div>
        <button className="btn">
          <Link to="/beers">ALL BEERS</Link>
        </button>
      </div>
      <div>
        <button className="btn">
          <Link to="/random-beer">RANDOM BEER</Link>
        </button>
      </div>
      <div>
        <button className="btn">
          <Link to="/new-beer">NEW BEER</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
