import React from "react";
import { NavLink } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

export default function BrowserRouter() {
  return (
    <nav id="nav-main">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/random-beer">Random Beers</NavLink>
      <NavLink to="/new-beer">New beer</NavLink>
    </nav>
  );
}
