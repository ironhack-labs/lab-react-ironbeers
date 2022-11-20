import React from 'react'
import { Link } from 'react-router-dom';
import beerImage from '../assets/beers.png'
import randomBeerImage from '../assets/random-beer.png'
import newBeerImage from '../assets/new-beer.png'


function Home() {
  return (
    <div>
        <img src={beerImage} alt="dbgf" />
        <Link to="/beer">
            <h1>All Beers</h1>
        </Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ratione deserunt eos! Quis eum porro saepe repellat placeat,
        itaque libero, illo magnam dolor nemo in neque? Magni, repellendus et! Nemo?</p>


        <img src={randomBeerImage} alt="fgbgfn" />
        <Link to="/random-beer">
            <h1>Random Beers</h1>
        </Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ratione deserunt eos! Quis eum porro saepe repellat placeat,
        itaque libero, illo magnam dolor nemo in neque? Magni, repellendus et! Nemo?</p>

        <img src={newBeerImage} alt="xfbgn" />
        <Link to="/new-beer">
            <h1>New Beers</h1>
        </Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ratione deserunt eos! Quis eum porro saepe repellat placeat,
        itaque libero, illo magnam dolor nemo in neque? Magni, repellendus et! Nemo?</p>
    </div>
  )
}

export default Home