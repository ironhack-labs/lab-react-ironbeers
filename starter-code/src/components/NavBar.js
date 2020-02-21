import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={{backgroundColor: "lightBlue"}}>
      <NavLink to="/">
        <img src="/images/home-run.png" style={{width: "3%", display: "block", marginLeft: "auto", marginRight: "auto"}} alt="homeicon" />
      </NavLink>
    </nav>
  );
};

export default NavBar;
