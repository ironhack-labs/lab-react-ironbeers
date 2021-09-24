import React from 'react';
import './NavBar.css';

import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="nav-bar-container container fixed-top">
      <Link to="/">
        <button
          type="button"
          className="listing-beer-button btn btn-info w-100"
        >
          <i className="fas fa-home fs-1"></i>
        </button>
      </Link>
    </div>
  );
};

export default NavBar;
