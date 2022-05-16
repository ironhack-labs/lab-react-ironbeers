import React from 'react'
import beers from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'
import { Link } from "react-router-dom"; 

function Home() {

    return (
        <>
<h1>Welcome Beer Lovers</h1>

        <div>
            <Link to={`/beers`}> 
            <div className="wrapper">
                <img className="imageThree" src={beers} alt="beer-background"/>
                <h2>All Beers</h2>
            </div>
            </Link>  

            <Link to={`/random-beer`}>
            <div className="wrapper">
            <img className="imageThree" src={randomBeer} alt="beer-background"/>
            <h2>Random Beer</h2>
            </div>
            </Link>

            <Link to={`/new-beer`}>
            <div className="wrapper">
            <img className="imageThree" src={newBeer} alt="beer-background"/>
            <h2>New Beer</h2>
            </div>
            </Link>

            </div>
        </>)
}
export default Home 