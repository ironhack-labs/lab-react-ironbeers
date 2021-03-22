import React from 'react';
import { NavLink } from 'react-router-dom';

const NewBeer = () => {
  return (
    <div>
      <header>
        <NavLink exact to="/" className="nav-link">
          Home
        </NavLink>
      </header>
      <p>new beeer</p>
    </div>
  );
};

export default NewBeer;
