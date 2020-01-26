/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const NavBar = () => (
  <div class="d-flex justify-content-center align-items-center bg-info shadow-sm">
    <Link to="/">
      <img className='img-home' src="../images/home.png" alt="Home" />
    </Link>
  </div>
)

export default NavBar;