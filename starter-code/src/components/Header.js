import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export const Header = () => {
  return (
    <nav className="header">
      <Link to="/">
        <i className="fa fa-home"></i>
      </Link>
    </nav>
  );
};
