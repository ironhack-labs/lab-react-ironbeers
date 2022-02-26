import React from 'react';
import beer from '../assets/beers.png';
import randomBeer from '../assets/random-beer.png';
import newBeer from '../assets/new-beer.png';
import { Link } from 'react-router-dom';


function Homepage() {
    return (
        <div className='row'>
            <div>
                <img src="./images/beers.png" className='responsive' alt="" />
                <Link to="/beers" className='large-padding center-align'> <h4>All Beers</h4> </Link>
            </div>
            <div>
                <img src="./images/random-beer.png" className='responsive' alt="" />
                <Link to="/random-beer" className='large-padding center-align'> <h4>Random Beer</h4> </Link>
            </div>
            <div>
                <img src="./images/new-beer.png" className='responsive' alt="" />
                <Link to="/new-beer" className='large-padding center-align'> <h4>New Beer</h4> </Link>
            </div>
        </div>
    )
}

export default Homepage