import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../assets/HomeIcon.png";
function Header() {
  return (
    <Link to="/">
      <nav>
        <img src={HomeIcon} alt="imgHead" />
      </nav>
    </Link>
  );
}

export default Header;
