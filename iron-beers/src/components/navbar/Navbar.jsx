import navbar from '../../img/navbar.png'
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-style">
      <Link to='/'><img src={navbar} alt='Home'/></Link>
    </nav>
  )
}

export default Navbar;