import React from "react";
import "./nav.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/beer">beers</Link>
        </li>
        <li>
          <Link to="/random">random-beer</Link>
        </li>
        <li>
          <Link to="/newbeer">new-beer</Link>
        </li>
         </ul>
    </nav>
  );
};

export default Navbar;
