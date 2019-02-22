import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () =>{
  return(
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/beers">Beers</Link></li>
        <li><Link to="/random">Random Beer</Link></li>
        <li><Link to="/new">New Beer</Link></li>
      </ul>
    </nav>
  )  
}

export default navbar;