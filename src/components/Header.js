import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-light bg-light">
        <Link to='/'>
        <header><i class="fas fa-home"></i></header>
        </Link>  
    </nav>
  )
}

export default Header;