import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export const Header = () => {
  return (
    <Link className="link" to="/">
      <nav className="header">
        <i className="fa fa-home"></i>
      </nav>
    </Link>
  );
};
