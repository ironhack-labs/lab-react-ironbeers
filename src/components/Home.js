import React from 'react';
import { Link } from 'react-router-dom';
import imgBeers from '../assets/beers.png';
import imgRandomBeer from '../assets/random-beer.png';
import imgNewBeer from '../assets/new-beer.png';
import './Home.css';

function Home() {
    return (
        <div className='homepage'>
            <div class="card mb-3">
                <img class="card-img-top" src={imgBeers} alt="Beers" />
                <div class="card-body">
                    <Link to='/beers'>
                        <h5 class="card-title">Beers</h5>
                    </Link>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>

            <div class="card mb-3">
                <img class="card-img-top" src={imgRandomBeer} alt="Beers" />
                <div class="card-body">
                    <Link to='/random-beer'>
                        <h5 class="card-title">Random Beer</h5>
                    </Link>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>

            <div class="card mb-3">
                <img class="card-img-top" src={imgNewBeer} alt="Beers" />
                <div class="card-body">
                    <Link to='/new-beer'>
                        <h5 class="card-title">New Beer</h5>
                    </Link>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>

        </div>
    )
}

export default Home;
