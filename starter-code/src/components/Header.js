import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export const Header = () => {
  return (
    <nav className="header">
      <Link className="link" to="/">
        HOME
      </Link>
    </nav>
  );
};
