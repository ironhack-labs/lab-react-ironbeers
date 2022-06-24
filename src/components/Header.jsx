import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <Link to="/">
          <img
            src="https://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png"
            alt="Home icon"
            className="homeIcon"
          />
        </Link>
      </header>
    </div>
  );
};

export default Header;
