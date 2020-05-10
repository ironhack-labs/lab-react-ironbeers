import React from "react";
import { NavLink } from "react-router-dom";

const NavMain = (props) => {
  return (
    <div>

      <NavLink exact to="/beers">
     
      </NavLink>
      <NavLink exact to="/random-beer">
    
      </NavLink>
      <NavLink exact to="/new-beer">
    
      </NavLink>
 

    </div>
  );
};

export default NavMain;