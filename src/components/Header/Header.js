import React from 'react'

import { Link } from 'react-router-dom'

import './Header.css';

const Header = () => {
  return (
    <div className="Header">
      <nav className="navbar navbar-light">
        <div className="container-fluid d-flex justify-content-center">
          <Link className="navbar-brand text-white" to="/">
            Home Page
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header