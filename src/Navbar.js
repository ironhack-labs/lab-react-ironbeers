import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        <i className="fas fa-home" style={{ color: 'white' }}></i>
      </Link>
    </nav>
  );
}

export default Navbar;
