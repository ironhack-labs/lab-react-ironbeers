import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <nav className="navbar-style">
        <Link to="/" className='text-nav' style={{ textDecoration: 'none' }}>HOME</Link>
    </nav>
  )
}

export default Navbar;