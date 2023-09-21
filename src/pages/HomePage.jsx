import React from 'react'
import {Link} from 'react-router-dom'
const beers = require('../assets/beers.png')
const randomBeers = require('../assets/new-beer.png')
const newBeers = require('../assets/random-beer.png')

function HomePage(props) {
  return (
    <div class='homePage'>
      <div>
        <Link to='beers'><img src={beers} alt='beers' /></Link>
        <Link class='homeLinks' to='beers'>All Beers</Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>
      <div>
        <Link to='random-beer'><img src={randomBeers} alt='beers' /></Link>
        <Link class='homeLinks' to='random-beer'>Random Beer</Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>
      <div>
        <Link to='new-beer'><img src={newBeers} alt='beers' /></Link>
        <Link class='homeLinks' to='new-beer'>New Beer</Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>
    </div>
  )
}

export default HomePage