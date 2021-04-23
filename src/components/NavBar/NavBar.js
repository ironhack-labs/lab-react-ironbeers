import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-primary ">
      <div className="container d-flex justify-content-center">
        <Link className="navbar-brand " to="/">
          Home
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
