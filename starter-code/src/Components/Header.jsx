import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <Link exact to="/">
        <img
          className="home-img"
          src="https://cdn4.iconfinder.com/data/icons/mono-color-web-mobile/250/Home-512.png"
          alt=""
        />
      </Link>
    </div>
  );
};

export default Header;
