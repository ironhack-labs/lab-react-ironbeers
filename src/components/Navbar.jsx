import React from "react";
import { Link } from "react-router-dom";
import homepage from "../assets/homepage.png";

function Navbar() {
  return (
    <div>
      <Link to="/">
        <img src={homepage} alt="" />
      </Link>
    </div>
  );
}

export default Navbar;
