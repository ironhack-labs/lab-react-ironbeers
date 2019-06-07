import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav class="navbar sticky-top navbar-primary bg-primary text-white  h2">
      <Link to="/" className="text-white mx-auto"><i className="fas fa-home fa-lg"></i></Link>
    </nav>
  );
}

export default Header;
