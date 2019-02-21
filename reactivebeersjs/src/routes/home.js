import React from 'react';
import { Link } from 'react-router-dom';

const home = () => {
  return (
    <div>
      <div>
        <h3>Welcome to IronBeers page!</h3>
      </div>
      <ul>
          <li><Link to='/beers'>All Beers</Link></li>
          <li><Link to='/randon-beer'>Random Bee</Link></li>
          <li><Link to='/new-beer'>New Beer</Link></li>
        </ul>
    </div>
  )
}

export default home;