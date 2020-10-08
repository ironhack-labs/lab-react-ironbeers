import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <div>
        <Link to="/beers">Beers</Link>
        <Link to="/random-beer">Random beer</Link>
        <Link to="/new-beer">New beer</Link>
      </div>
    </div>
  );
};

export default Home;
