import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <ul
        style={{
          display: "flex",
          listStyleType: "none",
          justifyContent: "space-between",
        }}
      >
        
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        
      </ul>
    </nav>
  );
};

export default Header;
