import React from "react";
import { NavLink } from "react-router-dom";

const NavMain = () => {
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <br/>
      <NavLink exact to="/beers">
        Beers
      </NavLink>
      <br/>
      <NavLink exact to="/beers/create">
        Newbeer
      </NavLink>
      <br/>
      <NavLink exact to="/beers/random-beer">
        Randombeer
      </NavLink>
      
    </nav>
  );
};

export default NavMain;