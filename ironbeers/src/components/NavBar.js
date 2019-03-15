import React from "react";
import { Link } from "react-router-dom";
import baselineHome from "../baselineHome.svg";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <Link to="/">
        <img src={baselineHome} className="logo" alt="home" />
      </Link>
    </div>
  );
};

export default NavBar;
