import React from "react";
import { Link } from "react-router-dom";
import homeImg from "../assets/home-icon.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={homeImg} />
      </Link>
    </nav>
  );
}

export default Navbar;
