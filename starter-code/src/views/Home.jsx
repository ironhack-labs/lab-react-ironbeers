import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <div>
        <Link to="/beers">
            <div>
                <img src='/images/beers.png'/>
                <h1>All Beers</h1>
                <p>Lorem Ipsum...</p>
            </div>
        </Link>

        <Link to="/random-beer">
            <div>
                <img src='/images/random-beer.png'/>
                <h1>Random Beer</h1>
                <p>Lorem Ipsum...</p>
            </div>
        </Link>

        <Link to="/new-beer">
            <div>
                <img src='/images/new-beer.png'/>
                <h1>New Beer</h1>
                <p>Lorem Ipsum...</p>
            </div>
        </Link>

        </div>
    )
}
