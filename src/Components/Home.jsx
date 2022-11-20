import React from 'react'
import { Link } from 'react-router-dom';
import newBeer from "../assets/new-beer.png"
import beer from "../assets/beers.png"
import randomBeer from "../assets/random-beer.png"



function Home() {
  return (
    <div>
    <Link to="/AllBeers">All Beers
    <img src={beer} alt="" />
    </Link>
    <Link to="/NewBeer">Random Beer
    <img src={randomBeer} alt="" />
    </Link>
    <Link to="/RandomBeer">New Beer
    <img src= {newBeer} alt="" /></Link>

    </div>
  )
}

export default Home
