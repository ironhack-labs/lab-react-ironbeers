import React from "react";
import { NavLink } from "react-router-dom";

export default function navBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/random-beer">Random</NavLink>
      <NavLink to="/new-beer">New beer</NavLink>
    </nav>
  );
}
