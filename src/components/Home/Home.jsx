import React from "react"

import {Link} from "react-router-dom"
import AllBeers from '../AllBeers/AllBeers'
import RandomBeer from '../RandomBeer/RandomBeer'
import NewBeer from '../NewBeer/NewBeer'
export default function Home() {
    return <div classNameName="Home">
        <h1>Welcome to Home Page</h1>
        {/* ALL BEERS */}
        <Link to='/beers'>
            <img src="" alt="" />
            <h1>All beers</h1>
        </Link>
        {/* RANDOM BEER */}
        <Link to='/random-beer'>
            <img src="" alt="" />
            <h1>Random beer</h1>
        </Link>
        {/* NEW BEER */}
        <Link to='/new-beer'>
            <img src="" alt="" />
            <h1>New Beer</h1>
        </Link>
    </div>
}