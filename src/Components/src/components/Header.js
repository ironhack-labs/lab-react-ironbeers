import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link to="/">IronBeers</Link>
    </header>
  );
}

export default Header;
