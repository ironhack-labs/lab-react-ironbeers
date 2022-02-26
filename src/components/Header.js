import React from "react";
import { NavLink } from "react-router-dom";
import HomePage from "./HomePage";
import homebtn from "../assets/home.png"

export default function Header() {
  return (
    <header className="Header">
      <NavLink to="/" element={<HomePage />}>
      <img src={homebtn} alt="home"/>
      </NavLink>
    </header>
  );
}
