import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <nav className="header">
      <NavLink className="navlink" exact to="/">
       Home 🏠
      </NavLink>
    </nav>
  );
}

export default Header;
