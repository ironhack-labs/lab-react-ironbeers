import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Home = () => (
  <nav className="navbar is-link">
    <h1 className="title is-1">
      <Link to="/">
        <span role="img" aria-label="Home">
          🏠️
        </span>
      </Link>
    </h1>
  </nav>
);

export default Home;
