import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="nav-style">
         
          <Link to='/'><img src='https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png' alt='randomBeer'></img></Link>
      </nav>
    )
  }
   
  export default Navbar;