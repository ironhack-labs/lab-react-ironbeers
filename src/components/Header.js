import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="header">
      <Link to='/'>Home</Link>
    </nav>
  );
}

export default Header;