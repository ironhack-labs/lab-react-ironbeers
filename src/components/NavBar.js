import React from 'react';
import { NavLink } from "react-router-dom";
 
function Navbar() {
  return (
    <nav>
      <NavLink exact to="/">
        <button>Home</button>
      </NavLink>
    </nav>
  );
}
 
export default Navbar;