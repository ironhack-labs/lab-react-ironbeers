import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Nav(props) {
  return (
    <nav>
      <Link to='/' className='navBar'>
        <span role='img' aria-label='Home'>🏠</span>
      </Link>
    </nav>
  );
}

export default Nav;
