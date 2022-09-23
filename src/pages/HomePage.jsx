import React from 'react'
import { Link } from 'react-router-dom'
import beers from '../assets/beers.png'
import random from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'

function HomePage() {
    return (
    <div>
        <Link to="/beers">
            <img src={beers} alt="all beers" />
            <h1>All Beers</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ducimus optio nam quasi! Commodi, aliquam eaque. Aperiam expedita molestias nostrum alias nobis dolore eveniet eaque blanditiis corporis, tempora, exercitationem porro?</p>
        </Link>
        <Link to="/random-beer">
            <img src={random} alt="random beer" />

            <h1>Random Beer</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ducimus optio nam quasi! Commodi, aliquam eaque. Aperiam expedita molestias nostrum alias nobis dolore eveniet eaque blanditiis corporis, tempora, exercitationem porro?</p>
        </Link>
        <Link to="/new-beer">
            <img src={newBeer} alt="new beer" />
            <h1>New Beer</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ducimus optio nam quasi! Commodi, aliquam eaque. Aperiam expedita molestias nostrum alias nobis dolore eveniet eaque blanditiis corporis, tempora, exercitationem porro?</p>
        </Link>
        
    </div>
    )
}

export default HomePage