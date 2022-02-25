import React from "react";
import { Link } from "react-router-dom";
import home from "../assets/home.png";

function Header() {
  return (
    <header className="home-link">
      <Link to="/" >
        <div>
          <img src={home} alt="home" />
        </div>
      </Link>
    </header>
  );
}

export default Header;
