import React from "react";
import { Link } from "react-router-dom";
import homeLogo from "../assets/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d (1).png";

function Header() {
  return (
    <div>
      <nav>
        <Link to="/">
          <img src={homeLogo} alt="home logo" />
        </Link>
      </nav>
    </div>
  );
}

export default Header;
