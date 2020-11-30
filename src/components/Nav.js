import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-style">
      <NavLink to="/">
      <img src="/public/" style={{ width: '60px'}} alt='home' />
      </NavLink>
    </nav>
  );
};

export default Nav;
