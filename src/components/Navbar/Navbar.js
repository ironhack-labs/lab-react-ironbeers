import React from 'react';
import {NavLink } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg  sticky-top  navbar-light  navColor">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">IronBeers Hooks edition</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse frcb" id="navbarNav">
          <ul className="navbar-nav d-flex">

              <li className="nav-item px-3">
                <NavLink
                  to="/allBeers"
                  className={({ isActive }) => (isActive ? "link-active" : "")}
                > All Beers
                </NavLink>
              </li>

              <li className="nav-item px-3">
                <NavLink
                  to="/random"
                  className={({ isActive }) => (isActive ? "link-active" : "")}
                > Random Beer
                </NavLink>
              </li>

              <li className="nav-item px-3">
                <NavLink
                  to="/new-beer"
                  className={({ isActive }) => (isActive ? "link-active" : "")}
                > Create your Beer!
                </NavLink>
              </li>
              
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;