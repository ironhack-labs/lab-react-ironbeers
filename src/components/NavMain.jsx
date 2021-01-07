import React from "react";
import { NavLink } from "react-router-dom";

const NavMain = () => {
  return (
    <nav>
      <NavLink exact to="/">
        Home 
      </NavLink>
      <NavLink exact to="/beers">
        Beers 
      </NavLink>
      <NavLink exact to="/beers/create">
        Add a beer 
      </NavLink>
      <NavLink exact to="/beers/random">
        Random Beer 
      </NavLink>
    </nav>
  );
};

export default NavMain;
