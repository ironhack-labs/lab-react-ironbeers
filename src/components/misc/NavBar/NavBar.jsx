import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Link to={"/"}>
    <nav className="navbar bg-body-tertiary" style={{background:"#34ebe1" }}>
      <div className="container-fluid d-flex justify-content-center">
        <img
          src="https://www.freepnglogos.com/uploads/logo-home-png/chimney-home-icon-transparent-1.png"
          alt="Logo"
          width="50"
          height="35"
          
        />
      </div>
    </nav>
    </Link>
  );
};

export default NavBar;
