import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/beers">All Beers</Link>
        </li>
        <li>
          <Link to="/random-beer">Random Beers</Link>
        </li>
        <li>
          <Link to="/new-beer">New Beer</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
