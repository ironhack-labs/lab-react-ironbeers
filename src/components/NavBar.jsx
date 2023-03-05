import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <NavLink to="/">
          <h3>Home</h3>
        </NavLink>
        <NavLink to="/beers">
          <h3>Beers</h3>
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;