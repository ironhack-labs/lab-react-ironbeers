import React from 'react'
import { Link } from 'react-router-dom'

import picAllBeers from '../assets/beers.png';
import picRandomBeer from '../assets/random-beer.png';
import picNewBeer from '../assets/new-beer.png';

const Homepage = () => {
    return (
        <div className="homepage">
            <Link to="/beers" className="homepage-link">
                <img src={picAllBeers} alt="section all beers" />
                Beers
            </Link>

            <Link to="/random-beer" className="homepage-link">
                <img src={picRandomBeer} alt="section random beeer" />
                Random Beer
            </Link>

            <Link to="/new-beer" className="homepage-link">
                <img src={picNewBeer} alt="section new beer" />
                New Beer
            </Link>
        </div>
    )
}

export default Homepage