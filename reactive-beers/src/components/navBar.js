import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/allBeers'>All beers</Link></li>
        <li><Link to='/randomBeer'>Random Beer</Link></li>
        <li><Link to='/newBeer'>New Beer</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar;
