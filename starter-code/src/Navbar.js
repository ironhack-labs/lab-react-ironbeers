import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = props => {
  return (
    <div className="container">
      <nav className="navbar navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
