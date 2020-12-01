import React from 'react';
import {NavLink} from 'react-router-dom';


function NavBar() {
  return (
    <nav>
      <NavLink to="/">
        <h4>Home</h4>
      </NavLink>
    </nav>
  );
}

export default NavBar;

