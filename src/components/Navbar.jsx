import { Link } from "react-router-dom";
import homeIcon from "../assets/home-icon.png";
import "./Navbar.css";
import React from "react";

function Navbar() {
  return (
    
      <div className="navbar">
        <Link to={"/"}>
          <img className="mx-3 my-1" src={homeIcon} alt="home-icon" />
        </Link>
      </div>


  )
}

export default Navbar;
