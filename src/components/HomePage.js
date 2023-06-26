import React from "react";
import { Link } from "react-router-dom";
import beers from "../assets/beers.png"
import newBeer from "../assets/newBeer.png"
import randomBeer from "../assets/randomBeer.png"


function HomePage() {
    return (
        <>
            <h1>Welcome</h1>

            <h4>All Beers</h4>
            <Link to="/list">
                <img src={beers} alt="BeersList" />
            </Link>
            <h4>New Beer</h4>
            <Link to="/new">
                <img src={newBeer} alt="newBeer" />
            </Link>
            <h4>Random Beer</h4>
            <Link to="/random">
                <img src={randomBeer} alt="randomBeer" />
            </Link>
        </>
    );
}

export default HomePage;