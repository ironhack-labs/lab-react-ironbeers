import React from 'react'
import {Link} from "react-router-dom"
import beersImg from "../assets/beers.png"
import randBeerImg from "../assets/random-beer.png"
import newBeerImg from "../assets/new-beer.png"

function Home() {
  return (
    <div className='home-container'>
        <Link to="/beers" className='home-page-links'>
            <img src={beersImg} alt="allbeers" className='home-imgs'/>
            <p className='home-p'>All Beers</p>
        </Link>

        <Link to="/random-beer" className='home-page-links'>
          <img src={randBeerImg} alt="randbeer" className='home-imgs'/>
          <p className='home-p'>Random Beer</p>
        </Link>

        <Link to="/new-beer" className='home-page-links'>
          <img src={newBeerImg} alt="newbeers" className='home-imgs'/>
          <p className='home-p'>New Beer</p>
        </Link>
    </div>
  )
}

export default Home