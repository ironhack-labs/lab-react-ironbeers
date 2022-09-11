import React from "react";
import { Link } from "react-router-dom";
import icon from "../assets/Matrix-icon.png";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={icon} alt="homeIcon" />
      </Link>
    </header>
  );
};

export default Header;
