import { NavLink } from "react-router-dom";
import React from "react";
import home from "../assets/house.png"
function Header() {
  return (
    <nav>
      <NavLink exact to="/" activeClassName="currentNav">
        <img src={home} width='40px' alt='homepage icon'/>
      </NavLink>
    </nav>
  );
}

export default Header;
