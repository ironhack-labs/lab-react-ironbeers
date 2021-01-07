import React from "react";
import { NavLink } from "react-router-dom";
import NavHome from './NavHome'

const NavMain = () => {
  return (
    <nav>
      <NavHome/>
      <NavLink exact to="/beers">
        Beers 
      </NavLink>
      <NavLink exact to="/new-beer">
        Add a beer 
      </NavLink>
      <NavLink exact to="/random-beer">
        Random Beer 
      </NavLink>
    </nav>
  );
};

export default NavMain;
