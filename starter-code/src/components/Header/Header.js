import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/home">
      <div className="header">
        <i className="fas fa-home"></i>
      </div>
    </Link>
  );
};

export default Header;
