import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";

export default function NavBar() {
  return (
    <Link to="/">
      <nav id="navbar"> 🏚 </nav>
    </Link>
  );
}
