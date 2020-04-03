import React from "react";
import { Link } from "react-router-dom";
import "../styling/Navbar.css";

export default function Navbar() {
  return (
    <Link to={"/"}>
      <nav>
        <p  className="text-center">🏠</p>
      </nav>
    </Link>
  );
}
