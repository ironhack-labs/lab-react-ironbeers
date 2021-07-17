import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
          <NavLink activeStyle={{ color: 'red' }} exact to="/">
            <img src="/home.png" alt="Logo" />
          </NavLink>
     
      </ul>
    </nav>
  );
}

export default NavBar;
