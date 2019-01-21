import React from "react";
import logo from '../img/logo.png'
import { Link } from "react-router-dom";

export const Header =()=> {
    return (
      <nav className="navbar is-warning" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src={logo} alt="logo"/> IronBeers React
          </Link>
        </div>
      </nav>
    );
  }