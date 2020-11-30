import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/">
        <img src="/images/house-icon.png" alt="home" title="Back to Homepage" />
      </Link>
    </header>
  );
}

export default Header;
