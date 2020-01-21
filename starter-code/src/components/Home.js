import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className="Home">
      <div className="AllBeers">
        <Link to="/beers">
          <img alt='' src='/images/beers.png'></img>
          <h1>All beers</h1>
        </Link>
      </div>
      <div className="RandomBeer">
        <Link to="/random-beer">
          <img alt='' src='/images/random-beer.png'></img>
          <h1>Random beer</h1>
        </Link>
      </div>
      <div className="NewBeer">
        <Link to="/new-beer">
          <img alt='' src='/images/new-beer.png'></img>
          <h1>New beer</h1>
        </Link>
      </div>
    </div>
  )
}

export default Home
