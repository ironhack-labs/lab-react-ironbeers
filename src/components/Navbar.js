import React from "react";
import header from "../assets/header.png";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <Link to="/">
      <nav>
        <img
          src={header}
          alt="home"
          style={{ width: "100%", marginBottom: "20px" }}
        />
      </nav>
    </Link>
  );
}

export default Navbar;