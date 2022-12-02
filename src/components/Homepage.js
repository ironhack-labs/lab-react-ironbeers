import React from 'react';
import imgAllBeers from "../assets/beers.png";
import imgRandomBeers from "../assets/random-beer.png";
import imgNewBeers from "../assets/new-beer.png";
import { Link } from "react-router-dom";

function Homepage() {
    return (
        <div>
            <Link to="/beers">
            <img src={imgAllBeers} alt="all beers"/>
            <h2>All Beer</h2>
            <p>Lorem  ipsum</p>
            </Link>
            <Link to="/random-beer">
                <img src={imgRandomBeers} alt="random beer"/>
                <h2>Random Beer</h2>
                <p>Lorem  ipsum</p>
            </Link>
            <Link to="/new-beer">
                <img src={imgNewBeers} alt="new beer"/>
                <h2>New Beer</h2>
                <p>Lorem  ipsum</p>
            </Link>
        </div>
    )
}

export default Homepage;