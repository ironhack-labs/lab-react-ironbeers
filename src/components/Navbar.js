import { NavLink } from "react-router-dom";
import React from 'react';
 
function Navbar() {
  return (
    <nav>
      <NavLink exact to="/">
      <i className="material-icons">home</i>
      </NavLink>
    </nav>
  );
}
 
export default Navbar;