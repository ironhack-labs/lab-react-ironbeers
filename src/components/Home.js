import React from "react";
import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png"

function Home() {
    return (
        <div className="NavBar">
            <img src={beers}></img>
                <Link className="Link" to="/beer">BEERS</Link>
            <img src={newBeer}></img>
                <Link className="Link" to="/random-beer">RANDOM BEER</Link>
            <img src={randomBeer}></img>
                <Link className="Link" to="/new-beer">NEW BEER</Link>
        </div>
    );
}

export default Home;