import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-link">
        Home
      </Link>
    </nav>
  );
};

export default Navbar;
