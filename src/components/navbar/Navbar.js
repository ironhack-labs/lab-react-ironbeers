import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li>
          <Link to="/">
            <img src='https://i.pinimg.com/originals/2e/51/45/2e5145f3e58a0bb07aa4ed9b29564534.png' alt="logo-home"/>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
