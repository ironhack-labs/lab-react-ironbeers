import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";

export default function Header() {
  return (
    <nav className="Header">
      <Link to={'/'}>🏠</Link>
    </nav>
  );
}