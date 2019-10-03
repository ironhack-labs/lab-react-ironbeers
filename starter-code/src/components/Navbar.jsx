import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const navbar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <Link to="/beers" exact>
            Beers
          </Link>
        </li>
        <li>
          <Link to="/random-beer" exact>
            Random Beer
          </Link>
        </li>
        <li>
          <Link to="/new-beer" exact>
            New Beer
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default navbar;
