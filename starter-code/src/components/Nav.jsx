import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <NavLink exact to="/">
      <div
        style={{
          marginLeft: "15%",
          width: "70%",
          background: "#3dc4fc",
          height: "6vh",
          textAlign: "center"
        }}
      ></div>
    </NavLink>
  );
}

export default Nav;
