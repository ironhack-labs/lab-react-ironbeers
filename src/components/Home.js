import React from 'react'
import { Link } from 'react-router-dom'
import beersImg from '../assets/beers.png'
import randomBeerImg from '../assets/random-beer.png'
import newBeerImg from '../assets/new-beer.png'

const Home = () => {
  return (
    <>
        
            <img src={beersImg} alt="beer"/>
            <Link to="/beers"><h2>Beers</h2></Link>
            <p>Check out all the beers in the API</p>
            <img src={randomBeerImg} alt="beer"/>
            <Link to="/random-beer"><h2>Random Beer</h2></Link>
            <p>Find out the random beer of the month</p>
            <img src={newBeerImg} alt="beer"/>
            <Link to="/new-beer"><h2>New Beer</h2></Link>
            <p>Create your own beer</p>

        
    </>
  )
}

export default Home