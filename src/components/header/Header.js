import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Link to={`/`}>
      <div className="header">Home</div>
    </Link>
  );
}

export default Header;
