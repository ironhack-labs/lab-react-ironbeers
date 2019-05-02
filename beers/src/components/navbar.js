

import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/beers'>Beers</Link></li>
        <li><Link to='/randomBeer'>Random Beer</Link></li>
        <li><Link to='/newBeer'>New Beer</Link></li>
      </ul>
    </nav>
  )
}

export default navbar;