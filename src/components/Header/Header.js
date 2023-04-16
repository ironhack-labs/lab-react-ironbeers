import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Link to={"/"}>
        <img src={"/"} className="w-100" alt="header" />
      </Link>
    </>
  );
}

export default Header;
