import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Link to="/">
      <button>Home Page</button>
    </Link>
  );
}

export default Header;
