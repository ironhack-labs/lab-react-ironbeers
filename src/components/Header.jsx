import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link className="headerLink" to="/">
        <div className="header" >
          <h2>Home</h2>
        </div>
      </Link>
    </header>
  );
};

export default Header;
