import React from "react";

import homeIcon from "../assets/home-icon.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to={"/"}>
        <img src={homeIcon} alt="" />
      </Link>
    </nav>
  );
}
