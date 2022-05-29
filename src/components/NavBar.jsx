import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/" className="navBarLink">littleHouse</Link>
    </div>
  );
}

export default NavBar;
