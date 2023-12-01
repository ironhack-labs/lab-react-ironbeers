//Navbar.jsx
import React from "react";
import {Link} from "react-router-dom";
import "./Navbar";

function Navbar() {
    return (
    <nav className="nav-bar">
      <Link to="/">Home</Link>
    </nav>
    )
}

export default Navbar;
