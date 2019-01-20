import React from "react";
import logo from '../img/logo.png'
import { NavLink } from "react-router-dom";

export const Header =()=> {
    return (
      <nav className="navbar is-warning" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink to="/" className="navbar-item">
            <img src={logo} alt="logo"/> IronBeers React
          </NavLink>
        </div>
      </nav>
    );
  }