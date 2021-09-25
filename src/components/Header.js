import { Link } from "react-router-dom";
import React from "react";
import home from "../assets/home.png"

function Header() {
  return (
    <nav>
      <Link exact to="/" className="header">
        <img src={home} width='30px' alt='homepage icon'/>
      </Link>
    </nav>
  );
}

export default Header;