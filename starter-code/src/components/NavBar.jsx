import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <NavLink to="/" className="nav-link">
          <FontAwesomeIcon icon="home" size="lg" fixedWidth />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="main-navbar"
          aria-controls="main-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink to="/beers" className="nav-link">
                All Beers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/random" className="nav-link">
                Random Beer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/add" className="btn btn-outline-primary my-2 my-sm-0">
                Add Beer
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
