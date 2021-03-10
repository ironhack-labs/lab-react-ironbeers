import React from 'react';
import homeIcon from '../../assets/home.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar mb-3 bg-primary">
      <div className="container-fluid d-flex justify-content-center">
        <Link to="/" className="navbar-brand">
          <img style={{ width: '3rem' }} src={homeIcon} alt="homeIcon" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
