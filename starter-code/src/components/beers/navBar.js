import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
    return (
      <nav className="nav-style">
        <Link to="/home">Home</Link>
      </nav>
    );
}

export default navbar;