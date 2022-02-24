import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import bootstrap from 'bootstrap'

function Home() {
  return (
    
    <div className='Home'>
      <header className='header'>
<Link to="/">
  <img src="/assets/images.png"/>
</Link>
      </header>
      <Link to="/BeerList">
        <img src='/assets/beers.png' />
        <h1>All Beers</h1>
        <p>There you go with your beers</p>
      </Link>
      <Link to="/RandomBeers">
        <img src='/assets/random-beer.png' />
        <h1>Random Beer</h1>
        <p>There you go with your Random beers</p>
      </Link>
      <Link to="/NewBeer">
        <img src='/assets/new-beer.png'/>
        <h1>New Beers</h1>
        <p>There you go with your New beer</p>
      </Link>
    </div>
  )
}
export default Home