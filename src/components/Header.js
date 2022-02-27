import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <NavLink to="/" end>
        Home
      </NavLink>
    </div>
  );
}
