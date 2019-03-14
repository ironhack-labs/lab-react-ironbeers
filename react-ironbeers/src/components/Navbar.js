import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item">
        <img src="https://pohjalabeer.com/img/pohjala-logo.png" width="112" height="28"></img>
      </a>
  
      <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <Link to="/">
            <a className="navbar-item">
            Home
            </a>
        </Link>  

      </div>
      </div>
  </nav>


  )
}

export default Navbar;