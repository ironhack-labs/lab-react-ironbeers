import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light justify-content-center">
        <Link to={"/"}>
          <img
            src="https://cdn0.iconfinder.com/data/icons/3d-web-front-vol-2/512/3d-web-front-vol-2/1000/Home.png"
            width="30"
            height="30"
            alt=""
          />
        </Link>
      </nav>
    </div>
  );
};

export default Header;
