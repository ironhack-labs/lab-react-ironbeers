import React from 'react'
import beers from "../assets/beers.png"
import randomBeer from "../assets/random-beer.png"
import newBeer from '../assets/new-beer.png'
import { Link } from 'react-router-dom'

const homeBeer = () => {
    <div>
    <Link to= "/beers">
    <h2>All Beers</h2>
    <img src={beers} alt="bar" />
    </Link>
    <Link to="/random-beer">
        <h2>Random Beer</h2>
        <img src={randomBeer} alt="taps"/>
    </Link>
    <Link to="/new-beer">
        <h2>Add a Beer</h2>
        <img src={newBeer} alt="glass of beer" />
    </Link>
    </div>
}
export default homeBeer