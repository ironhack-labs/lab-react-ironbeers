import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Home.css';

const Home = () => {
  return (
    <div>
      <div className="home-nav">
        <Link to="/beers">Beers</Link>
        <Link to="/random-beer">Random beer</Link>
        <Link to="/new-beer">New beer</Link>
      </div>
      
    </div>
  );
};

export default Home;
