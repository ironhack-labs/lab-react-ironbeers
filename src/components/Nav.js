import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav">
      <NavLink to="/">
        <i className="fas fa-home"></i>
      </NavLink>
    </nav>
  );
};

export default Nav;
