import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <img src="/home-logo.png" alt="logo" width={35}></img>
      </Link>
    </nav>
  );
}
