import React from 'react'
import { Link } from 'react-router-dom'
import beers from "../../assets/beers.png"
import randomBeer from "../../assets/random-beer.png"
import newBeer from "../../assets/new-beer.png"


const Home = () => {
  return (
    <div className="homepage">
      <article>
        <Link to="/beers">
          <img src={beers} alt="beers"/>
        </Link>
        <h3>All Beers</h3>
        <p className='tagline'>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>
      </article>

      <article>
        <Link to="/random-beer">
          <img src={randomBeer} alt="randomBeer"/>
        </Link>
        <h3>Random Beer</h3>
        <p className='tagline'>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>
      </article>

      <article>
        <Link to="/new-beer">
          <img src={newBeer} alt="newBeer"/>
        </Link>
        <h3>New Beer</h3>
        <p className='tagline'>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>
      </article>
    </div>
  )
}

export default Home;