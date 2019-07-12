import React from "react";
import { NavLink } from "react-router-dom";
export default function NavMain() {
  return (
    <nav className="navbar">
      <NavLink activeClassName="is-active" exact to="/">
        Home
      </NavLink>
      <NavLink activeClassName="is-active" to="/beers">
        Beers
      </NavLink>
      <NavLink activeClassName="is-active" to="/random-beer">
        Random beer
      </NavLink>
      <NavLink activeClassName="is-active" to="/new-beer">
        New beer
      </NavLink>
    </nav>
  );
}
