import React from 'react';
import { NavLink } from 'react-router-dom';

const RandomBeer = () => {
  return (
    <div>
      <header>
        <NavLink exact to="/" className="nav-link">
          Home
        </NavLink>
      </header>
      <p>RANDOM BEER</p>
    </div>
  );
};

export default RandomBeer;
