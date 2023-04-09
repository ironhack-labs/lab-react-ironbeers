import houseIcon from "../assets/houseIcon.png";
import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    
    <nav className="  h-12 bg-blue-500">
      <NavLink to={"/"} >
        <svg className="w-15 h-15">
          <image className="mx-auto" href={houseIcon} />
        </svg>
      </NavLink>
    </nav>
    
  );
};

export default NavBar;
