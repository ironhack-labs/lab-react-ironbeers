import React from "react";
import { Link } from "react-router-dom";
import homelogo from "../assets/home.png";

const Navbar = () => {
  return (
      <div className="navbar">
    <Link to='/'>
        <img className="homelogo" src={homelogo} alt="homelogo" />
    </Link>
      </div>
  );
};

export default Navbar;
