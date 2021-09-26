import React from 'react'
import {Link} from 'react-router-dom'
import beers from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'


export default function Homepage() {
    return (
        <div className='homepageDiv'>
        <div class='homeOption'>
            <img src={beers} alt="" />
            <Link class='homeLink'to="/beers">All Beers</Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor sagittis risus auctor sodales. Nunc eget luctus turpis.  </p>
        </div>
        <div class='homeOption'>
            <img src={newBeer} alt="" />
            <Link class='homeLink'to="/random-beer">Random Beer</Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor sagittis risus auctor sodales. Nunc eget luctus turpis.  </p>
        </div>
        <div class='homeOption'>
            <img src={randomBeer} alt="" />
            <Link class='homeLink'to="/new-beer">New Beer</Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor sagittis risus auctor sodales. Nunc eget luctus turpis.  </p>
        </div>  
        </div>
    )
}
