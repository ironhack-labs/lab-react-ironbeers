import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Link to="/">
      <h1>Home</h1>
    </Link>
  );
}

export default Header;
