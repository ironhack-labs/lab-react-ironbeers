import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-light bg-info">
      <NavLink className="navbar-brand" to="/">
        <i className="fas fa-home fa-2x" style={{color: 'white'}}></i>
      </NavLink>
    </nav>
  );
};

export default Nav;

/*
        <nav>
            <NavLink to='/' >Home</NavLink>
        </nav>

*/
