import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <i className="fa fa-home"></i>
      </Link>
    </header>
  );
};
