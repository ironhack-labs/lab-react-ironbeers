import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return(
  <nav className="navbar navbar-dark bg-dark d-flex justify-content-center">
    <Link className="text-uppercase home-btn" to={'/'}>Home</Link>
  </nav>
  )
}

export default NavBar;