import React from 'react';
import { Link } from 'react-router-dom';
 
const Navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li><Link to='/beers'>Beers</Link></li>
        <li><Link to='/beers/random'>Random Beers</Link></li>
        <li><Link to='/new-beer'>New Beer</Link></li>
      </ul>
    </nav>
  )
}
 
export default Navbar;