import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <NavLink exact to="/">
        <p className="NavLink">Home</p>
      </NavLink>
    </header>
  );
}
