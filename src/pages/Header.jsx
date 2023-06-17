import React from "react";
import { Link } from "react-router-dom";
import homeImage from "../assets/home.png";

function Header() {
  return (
    <header>
    <Link to="/">
      <img src={homeImage} alt="Logo" />
    </Link>
  </header>
  );
}

export default Header;
