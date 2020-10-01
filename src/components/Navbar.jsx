import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="container-fluid bg-primary mb-2">
      <div className="container pt-3 pb-3">
        <nav className="navbar navbar-dark bg-primary justify-content-center">
          <NavLink to="/">
            <i className="fa fa-home fa-3x text-white" aria-hidden="true"></i>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
