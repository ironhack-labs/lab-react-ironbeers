import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Home.css';

const Home = () => {
  return (
    <div>
      <div className="home-nav">
        <Link to="/beers">🍻 BEERS</Link>
        <Link to="/random-beer">🎲 RANDOM BEER</Link>
        <Link to="/new-beer">➕ NEW BEER</Link>
      </div>
      
    </div>
  );
};

export default Home;
