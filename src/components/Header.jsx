import React from "react";
import { NavLink } from "react-router-dom";
import homeIcon from "../assets/home-icon.png";

export function Header() {
  return (
    <div>
      <nav className="navBar">
      <NavLink to='/'> <img className="homeLogo" src={homeIcon} alt = 'homeIcon'/>  </NavLink>
   
      </nav>
       </div>
  );
}

export default Header
