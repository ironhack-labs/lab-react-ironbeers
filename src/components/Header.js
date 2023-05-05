import React from "react";
import { Link } from "react-router-dom";
import logoHeader from "../assets/logoHeader.png";




function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
        <img src={logoHeader} alt="logoHeader"/></Link>
   
      </nav>
    </header>
  );
}

export default Header;
