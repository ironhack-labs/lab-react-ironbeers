import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({adonde}) {
  return (
    <>
      <nav className="navbar is-iron">
        <Link to={adonde} className="navbar-item">
              <span className="icon ironHome">
              <i className="fas fa-3x fa-home"></i>
              </span>
        </Link>
      </nav>
    </>
  );
}