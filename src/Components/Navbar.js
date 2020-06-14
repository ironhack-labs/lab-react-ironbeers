import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        BEER APP
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
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
