import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">
        <h4>Home</h4>
      </Link>
    </div>
  );
};

export default Header;
