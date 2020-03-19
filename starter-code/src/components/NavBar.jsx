import React from "react";
import { Link } from "react-router-dom";
import navBarImage from "../../public/images/beers-home.png";

const NavBar = () => {
  return (
    <Link to="/">
      <img className="navbar-img" src={navBarImage} alt="header" />
    </Link>
  );
};

export default NavBar;
