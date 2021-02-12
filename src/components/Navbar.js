import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <div>
      <nav className="navbar bg-primary d-flex justify-content-center">
        <Link to={'/'}>
          <h1 className="text-light">
            <i className="fas fa-home"></i>
          </h1>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
