import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  
  return (
    <div>
      <h1>IronBeers</h1>
      <ul>
        <li><Link to='/all-beers'>All Beers</Link></li>
        <li><Link to='/random-beer'>Random Beer</Link></li>
        <li><Link to='/new-beer'>New Beer</Link></li>
      </ul>
    </div>
  )
}

export default Home;
