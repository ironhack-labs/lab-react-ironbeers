import React from "react";
import { Link } from "react-router-dom";

//Import image

import homeIcon from "../assets/home.png";

function Header() {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <img className="home-icon" src={homeIcon} alt="home-icon" />
      </Link>
    </nav>
  );
}

export default Header;
