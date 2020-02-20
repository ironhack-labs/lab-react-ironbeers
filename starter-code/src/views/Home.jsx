import React from 'react'
import {Link } from 'react-router-dom'

import "../styles/Home.css"

export default function Home() {
    return (
        <div className="home">
            <div className="home-cont">
                <img src="./images/beers.png" alt='beers' />
                <Link className="title" to="/beers">All Beers</Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend tristique arcu, et vulputate mauris rutrum at. Phasellus eleifend tristique arcu, et vulputate mauris rutrum at.</p>
            </div>
            <div className="home-cont">
                <img src="./images/random-beer.png" alt='random.beer'/>
                <Link className="title" to="/random-beer/:id">Random Beer</Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend tristique arcu, et vulputate mauris rutrum at. Phasellus eleifend tristique arcu, et vulputate mauris rutrum at.</p>
            </div>
            <div className="home-cont">
                <img src="./images/new-beer.png" alt='new-beer' />
                <Link className="title" to="/new-beer" >New Beer</Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend tristique arcu, et vulputate mauris rutrum at. Phasellus eleifend tristique arcu, et vulputate mauris rutrum at.</p>
            </div>
            
        </div>
    )
}
