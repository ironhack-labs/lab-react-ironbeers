// components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';


const home = () => {
  return (
    <div>
      <div>
      <Link to='/beers'>All Beers</Link>
      <li><Link to='/random-beer'>Random Beer</Link></li>
      <li><Link to='/new-beer'>New Beer</Link></li>

    <h3>Welcome to home page</h3>

      </div>
    </div>
  )
}

export default home;