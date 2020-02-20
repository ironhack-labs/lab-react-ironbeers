import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Link to="/">
      <div className="backgdheader">
        <img src="/images/home.png" alt="home" />
      </div>
    </Link>
  )
}

export default Header;