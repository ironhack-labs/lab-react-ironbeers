import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <NavLink to="/" className="nav-item nav-link" activeClassName="active">
        <i className="fas fa-home"></i>
      </NavLink>
    </nav>
  );
}

export default Navbar;
