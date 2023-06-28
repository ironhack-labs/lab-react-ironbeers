import React from "react";
import { Link } from "react-router-dom";
import Home from "../assets/home-icon.png";
import "../index.css";

function Navbar() {
  return (
    <>
      <Link to="/">
        <nav className="navbar">
          <img src={Home} alt="Home" />
        </nav>
      </Link>
    </>
  );
}

export default Navbar;
