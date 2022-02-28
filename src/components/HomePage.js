import React from 'react'
import { Link } from 'react-router-dom';
import beersImg from "../assets/beers.png"
import randomBeerImg from "../assets/random-beer.png"
import newBeerImg from "../assets/new-beer.png"

function HomePage() {
    return (
        <div className='home-page' >
            <Link to='/beers' className='link'>
                <img src={beersImg} alt="Beers" style={{width : '50vw'}}/>
                <h1>All Beers</h1>
                <p>There are hundreds of different types of beer on the craft beer market, and it can be challenging to remember all of the different beer names and beer styles. The type of a beer is determined by many different things including ingredients, region of origin and brewing method among a variety of others. </p>
            </Link>
            <Link to='/random-beer' className='link'>
                <img src={randomBeerImg} alt="Random Beer" style={{width : '50vw'}}/>
                <h1>Random Beer</h1>
                <p>There are thousands of breweries making thousands of beers. Here are some helpful suggestions for new, unique beers in case they're running out of ideas.</p>
            </Link>
            <Link to='/new-beer' className='link'>
                <img src={newBeerImg} alt="New Beer" style={{width : '50vw'}}/>
                <h1>New Beer</h1>
                <p>You can add beers or breweries if they are not yet in our database</p>
            </Link>
        </div>
    )
}

export default HomePage;
