import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav style={{width: "100vw", backgroundColor:"cyan", height: "7vh", display:"flex", justifyContent: "center", alignItems: "center"}}className="NavMain">
      <NavLink exact to="/">
        Home
      </NavLink>
    </nav>
  );
};

export default Header;
