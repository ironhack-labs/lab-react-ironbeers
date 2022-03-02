import React from 'react'
import beers from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'
import { Link } from "react-router-dom"; 

export default function Home() {

    return (
        <>
            <Link to={`/beers`}> 
            <div>
                <img src={beers} alt="beer-background"/>
                <h2>All Beers</h2>
            </div>
            </Link>  
                
            <Link to={`/random-beer`}>
            <div>
            <img src={randomBeer} alt="beer-background"/>
            <h2>Random Beer</h2>
            </div>
            </Link>

            <Link to={`/new-beer`}>
            <div>
            <img src={newBeer} alt="beer-background"/>
            <h2>New Beer</h2>
            </div>
            </Link>
        </>)
}
