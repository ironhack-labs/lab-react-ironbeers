// src/components/Navbar.js

import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/beers">Beers</NavLink>
      <NavLink to="/random-beer">Random Beer</NavLink>
      <NavLink to="/new-beer">New Beer</NavLink>
    </nav>
  );
}

export default Navbar;
