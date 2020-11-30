import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-style">
      <NavLink to="/">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Facebook_Home_logo.svg/450px-Facebook_Home_logo.svg.png" style={{width:'60px'}} alt='home' />
      </NavLink>
    </nav>
  );
};

export default Nav;
