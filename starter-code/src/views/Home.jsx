import React from 'react'
import {Link } from 'react-router-dom'


export default function Home() {
    return (
        <div>
            <div>
                <Link to="/beers">
                    <img src="images/beers.png" alt="beers"></img>
                    <h3>All Beers</h3>
                </Link>
                
            </div>
            <div>
                <Link to="/random-beer">
                    <img src="images/random-beer.png" alt="random"></img>
                    <h3>Random Beer</h3>
                </Link>
            </div>
            <div>
                <Link to="/new-beer">
                    <img src="images/new-beer.png" alt="new"></img>
                    <h3>New Beer</h3>
                </Link>
            </div>
        </div>
    )
}
