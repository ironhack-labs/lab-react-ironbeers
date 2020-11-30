import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='navBar'>
      <Link style={{textDecoration:'none'}} to='/'>
        <h1>Home</h1>
      </Link>
    </nav>
  )
};

export default Nav;