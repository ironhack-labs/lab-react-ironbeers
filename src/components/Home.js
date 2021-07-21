import {Link} from "react-router-dom"
import React from "react"

export default function () {
    return (
        <div>
            <Link className="homeLink" to="/ListBeers">
                <img src= "assets/beers.png" alt="beers"/>
                <h1>All Beers</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </Link>
            <Link className="homeLink" to="/RandomBeer">
             <img src= "assets/random-beer.png" alt="beers"/>
                <h1>Random Beer</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </Link>
            <Link className="homeLink" to="/NewBeer">
             <img src= "assets/new-beer.png" alt="beers"/>
                <h1>New Beer</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </Link>
        </div>
    )
}