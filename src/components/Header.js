import React from "react";
import headerImg from "../assets/header.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Link to="/">
      <nav>
        <img
          src={headerImg}
          alt="home"
          style={{ width: "100%", marginBottom: "20px" }}
        />
      </nav>
    </Link>
  );
}

export default Header;