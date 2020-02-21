import React from "react";
import { NavLink } from "react-router-dom";

export default function NavMain() {
  return (
    <nav id="nav-main">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/beers">List of beers</NavLink>
      <NavLink to="/random-beer">Random beer</NavLink>
      <NavLink to="/new-beer">Add a new beer</NavLink>
    </nav>
  );
}
