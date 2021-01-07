import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav>
        <NavLink exact to="/beers">
          <img className="cover" src="/images/beers.png" alt="" />
          <h1>All Beers</h1>
          <p>Discover all the beers.</p>
        </NavLink>
        <NavLink exact to="/random-beer">
          <img className="cover" src="/images/random-beer.png" alt="" />
          <h1>Random Beer</h1>
          <p>Discover a random beer.</p>
        </NavLink>
        <NavLink exact to="/new-beer">
          <img className="cover" src="/images/new-beer.png" alt="" />
          <h1>New Beer</h1>
          <p>Add a new beer.</p>
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
