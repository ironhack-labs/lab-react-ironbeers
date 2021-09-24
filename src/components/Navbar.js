import { NavLink } from "react-router-dom";
import React from 'react';
 
function Navbar() {
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
    </nav>
  );
}
 
export default Navbar;