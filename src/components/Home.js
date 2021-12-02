import React from 'react'
import { Link } from 'react-router-dom'
import beers from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'
import './Home.css'

function Home() {
    return (
        <div>
            <div>
                <Link to={`/beers`} className="birraso">
                    <img src={beers} alt="Birraso"/>
                    All beers papi
                </Link>
            </div>
            <div>
                <Link to={`/random-beer`} className="birraso">
                    <img src={randomBeer} alt="Birramanía"/>
                    Shuffle babi
                </Link>
            </div>
            <div>
                <Link to={`/new-beer`} className="birraso">
                    <img src={newBeer} alt="Birroncola"/>
                    Nueva beer mamá
                </Link>

            </div>
        </div>
    )
}

export default Home
