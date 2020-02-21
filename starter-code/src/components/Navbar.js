import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/beers">beers</NavLink>
        </li>
        <li>
          <NavLink to="/random-beer">random_beer</NavLink>
        </li>
        <li>
          <NavLink to="/new-beer">new_beer</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;  