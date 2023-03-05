import React from 'react'
import { Link } from 'react-router-dom'
import allBeers from '../assets/beers.png'
import randomBeers from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'

function Home() {
  return (
    <div>
        
      <img src={allBeers} alt="beers" />
      <Link to={`/beers`}>
      <p>All Beers</p>      
      </Link>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nulla congue cursus laoreet. Maecenas vestibulum sed tellus et aliquam.
      Ut quis efficitur elit, sed semper odio. Aliquam eu lorem nibh.
      </p>

      <br />

      
      <img src={randomBeers} alt="random beers" />
      <Link to={`/randomBeers`}>
      <p>Random Beers</p>      
      </Link>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nulla congue cursus laoreet. Maecenas vestibulum sed tellus et aliquam.
      Ut quis efficitur elit, sed semper odio. Aliquam eu lorem nibh.
      </p>

      <br />


      <img src={newBeer} alt="new beers" />
      <Link to={`/newBeers`}>
      <p>New Beer</p>
      </Link>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nulla congue cursus laoreet. Maecenas vestibulum sed tellus et aliquam.
      Ut quis efficitur elit, sed semper odio. Aliquam eu lorem nibh.
      </p>
 
    </div>
  )
}

export default Home