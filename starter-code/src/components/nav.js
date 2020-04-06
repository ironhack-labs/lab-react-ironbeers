import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <p className="navbar-item"><Link to='/'>Home</Link></p>
          <p className="navbar-item"><Link to='/user/signup'>Signup</Link></p>
          <p className="navbar-item"><Link to='/user/login' >Login</Link></p>
          <p className="navbar-item"><Link to='/user/logout' >Logout</Link></p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
