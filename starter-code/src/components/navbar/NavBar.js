import React from "react"
import { NavLink } from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <NavLink to="/">
            Inicio
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;