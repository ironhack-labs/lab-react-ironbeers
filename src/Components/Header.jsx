import React from "react";
import { Link } from "react-router-dom";
import "../Style/Header.css"
import Logo from "../assets/logo-home.png"
const Header = () => {
  return (
    <nav className="nav-header">
      <Link to={`/`}>
          <div><img src={Logo} alt="" className="img-header"/></div>
      </Link>
      
    </nav>
  );
};

export default Header;