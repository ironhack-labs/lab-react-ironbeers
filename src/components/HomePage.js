import React from 'react'
import {Link} from 'react-router-dom'
import Beers from '../assets/beers.png'
import RandomBeer from '../assets/random-beer.png'
import NewBeer from '../assets/new-beer.png'


export default function HomePage (){
    return(
        <nav>
            <ul>
                <img
					src={Beers}
					alt='all beers'
				/>
                <li>
                    <Link to="/beers">Beers</Link>
                </li>
                <img
					src={RandomBeer}
					alt='random beers'
				/>
                <li>
                    <Link to="/random-beer">Random Beer</Link>
                </li>
                <img
					src={NewBeer}
					alt='new beers'
				/>
                <li>
                    <Link to="/new-beer">New Beer</Link>
                </li>
            </ul>
        </nav>
    )
}