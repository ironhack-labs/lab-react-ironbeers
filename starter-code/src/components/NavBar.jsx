import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/beers">Beers</Link>
      </li>
      <li>
        <Link to="/beers/new">New</Link>
      </li>
      <li>
        <Link to="/beers/random">Random</Link>
      </li>
    </ul>
  );
};

export default NavBar;
