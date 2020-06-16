import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border sticky-top">
      <Link className="navbar-brand" to="/">
        BEER APP
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/beers">
              All Beers
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/random">
              Random Beer
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/new">
              New Beer
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
