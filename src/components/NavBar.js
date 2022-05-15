import React from "react";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/beers">Beers</NavLink>
          <NavLink to="/random-beer">Random Beer</NavLink>
          <NavLink to="/create-beer">Create Beer</NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
