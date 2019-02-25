import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const navbar = () => {
  return (
    <nav className="nav-style">
      <Link to="/">
        <img className="imgHouse" src="./images/house.png" />{" "}
      </Link>
    </nav>
  );
};

export default navbar;
