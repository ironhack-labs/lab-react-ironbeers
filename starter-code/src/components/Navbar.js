import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to='/' className='navbar-link'><i className="fas fa-home"></i></Link>
    </nav>
  )
}

export default Navbar;