import React from 'react';
import beer from '../assets/beers.png';
import randomBeer from '../assets/random-beer.png';
import newBeer from '../assets/new-beer.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='row'>
            <div>
                <img src={beer} className='responsive' alt="" />
                <Link to="/beers" className='logos'> <h4>All Beers</h4> </Link>
            </div>
            <div>
                <img src={randomBeer} className='responsive' alt="" />
                <Link to="/random-beer" className='logos'> <h4>Random Beer</h4> </Link>
            </div>
            <div>
                <img src={newBeer} className='responsive' alt="" />
                <Link to="/new-beer" className='logos'> <h4>New Beer</h4> </Link>
            </div>
        </div>
    )
}

export default Home;