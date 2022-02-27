import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="Header">
      <NavLink to={"/"}>
        <h1>🏠</h1>
      </NavLink>
    </header>
  );
}
