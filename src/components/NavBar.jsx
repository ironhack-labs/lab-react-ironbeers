import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav>
        <NavLink exact to="/beers">
          Beers
        </NavLink>
        <NavLink exact to="/random-beer">
          Random Beer
        </NavLink>
        <NavLink exact to="/new-beer">
          New Beer
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
