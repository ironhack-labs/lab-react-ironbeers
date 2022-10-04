import React from "react";
import { BsHouseFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="house-icon">
        <Link to={"/"}>
          <BsHouseFill />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
