import React from 'react';
import { Link } from 'react-router-dom';
import Beers from '../beers/Beers';

export default function Home() {

    return (
        <div className='home-page' >
            <div className='beers-button'>
                <img src='/img/beers.png'></img>
                <Link to='/beers'>All Beers</Link>
            </div>
            <div className='beers-button'>
                <img src='/img/random-beer.png'></img>
                <Link to='/randomBeers'>Random Beer</Link>
            </div>
            <div className='beers-button'>
                <img src='/img/new-beer.png'></img>
                <Link to='/createBeers'>Add Beer</Link>
            </div>
        </div>
    )
}
