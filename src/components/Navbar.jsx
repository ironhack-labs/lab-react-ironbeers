import React from "react";
import { Link } from "react-router-dom";
import homeIcon from "../assets/home-icon.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={homeIcon} alt="home" />
      </Link>
    </nav>
  );
}

export default Navbar;
