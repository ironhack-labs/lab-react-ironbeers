import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <div className="navBar">
      <Link to="/">
        <img src="#" alt="HOME" />
      </Link>
    </div>
  );
}
