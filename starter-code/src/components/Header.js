import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <Link to="/">
      <div
        style={{ backgroundColor: "cyan", width: "100%", padding: "10px 0" }}
      >
        Home
      </div>
    </Link>
  );
};

export default Header;
