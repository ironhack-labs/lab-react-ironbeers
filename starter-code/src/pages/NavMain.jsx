import React from "react";
import { NavLink } from "react-router-dom";

function NavMain() {
  return (
    <nav>
      <NavLink to={"/"}>
        <i class="fas fa-home"></i>
      </NavLink>
    </nav>
  );
}

export default NavMain;
