import React from 'react';
import {Link} from "react-router-dom"


const Homepage = () => {

    return (
      <ul>
      <li><Link to="/beers">All Beers</Link></li>
      <li><Link to="/random-beer">Random Beer</Link></li>
      <li><Link to="/new-beer">Add new Beer</Link></li>
      </ul>
    )
  
}

export default Homepage;
