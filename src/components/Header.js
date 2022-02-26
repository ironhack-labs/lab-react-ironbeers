import React from "react";
import "./Header.css";
import Home from "../assets/home.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <NavLink className="Header" to="/">
      <div>
        <img className="Img" src={Home} alt="Home" />
      </div>
    </NavLink>
  );
}
