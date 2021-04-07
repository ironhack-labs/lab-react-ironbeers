import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to="/beers">
        <img src="/images/beers.png" alt="See al beers" />
      </Link>
      <Link to="/random-beer">
        <img src="/images/random-beer.png" alt="Random beer" />
      </Link>
      <Link to="/new-beer">
        <img src="/images/new-beer.png" alt="Create a beer" />
      </Link>
    </div>
  )
}

export default Home
