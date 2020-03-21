import React from "react";
import { Link } from "react-router-dom";
import navBarImage from "../../public/images/beers-home.png";

const NavBar = link => {
  return (
    <Link to={link.url}>
      <img className="navbar-img" src={navBarImage} alt="header" />
    </Link>
  );
};

export default NavBar;
