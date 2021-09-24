import React from 'react';
import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
        <i className="fas fa-home"></i>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
             </div>
    </nav>
  );
}

export default Navbar;