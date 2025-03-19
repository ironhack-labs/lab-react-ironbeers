import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav-bar">
      <h2>
        Ready to go home, sailor?
        <Link to={"/"}>
          <span> Click Here!</span>
        </Link>
      </h2>
    </nav>
  );
}

export default Navbar;
