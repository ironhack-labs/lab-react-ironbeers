import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(adonde) {
  return (
    <>
      <nav className="navbar is-info">
        <div className="navbar-item has-dropdown is-hoverable">
        <Link to={adonde}>
            <p className="navbar-link is-arrowless">
              <span className="icon">
              <i className="fas fa-3x fa-home"></i>
              </span>
            </p>
        </Link>
        </div>
      </nav>
    </>
  );
}