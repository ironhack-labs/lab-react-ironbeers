//import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import beers from '../assets/beers.png' 
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'

function Home() {

    return (
        <div>
            <h1>IronBeers</h1>
            <img src={beers} alt="Beers" />
            <Link to = '/beers'>
                <h2>All Beers</h2>
            </Link>
            <p>A lot has happened since we started brewing in 2006 in co-founder Martin's mother's garage. It's been a wild journey and we now have four breweries and over 100 bars worldwide. And that was just the beginning.</p>
            <img src={randomBeer} alt={beers.name} />
            <Link to = '/random-beer'>
                <h2>Random Beer</h2>
            </Link>
            <p>4 ingredients is all you need to brew beer. It's what we do with it that makes our beer so special. The finest malted barley, world-class hops, refined Scottish spring water and our in-house yeast come together in perfect harmony to brew beers for everyone.</p>
            <img src={newBeer} alt="New Beer" />
            <Link to = '/new-beer'>
                <h2>New Beer</h2>
            </Link>
            <p>From non-alcoholic lagers to imperial stouts, flavor isn't defined by alcohol content (ABV). Every style has a signature ABV, but we also like to push the envelope, so expect the unexpected.</p>
        </div>
    )
}

export default Home;

