import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='Navbar'>
      <NavLink to="/" className="NavIcon">
      <img src="src\assets\home-icon.png" alt="Home Icon" />
      </NavLink>
    </nav>
  );
};

export default Navbar;