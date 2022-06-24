import React from "react";
import { Link } from "react-router-dom";

import homeImg from "../assets/home.png";

const Header = () => {
  return (
    <nav>
      <Link to="/">
        <img src={homeImg} alt="home-icon" />
      </Link>
    </nav>
  );
};

export default Header;
