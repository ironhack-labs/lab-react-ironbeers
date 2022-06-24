import React from "react";

import "./Header.css";
import homeIcon from "../assets/home-icon.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <NavLink to="/">
        <img src={homeIcon} alt="home-icon" />
      </NavLink>
    </header>
  );
};

export default Header;
