import { NavLink } from "react-router-dom";
import React , { Component}  from 'react'
function Navbar() {
  return (
    <nav>
      <NavLink exact to="/">
        <button>Home</button>
      </NavLink>

      <NavLink exact to="/apartments/new">
        <button>Add Apartment</button>
      </NavLink>
    </nav>
  );
}

export default Navbar;
