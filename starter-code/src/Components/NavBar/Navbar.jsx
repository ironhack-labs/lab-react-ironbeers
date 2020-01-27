import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

export default function Navbar(props) {
  return (
    <Link className="nav-bar" to="/">
    Casinha
    </Link>
  );
}
