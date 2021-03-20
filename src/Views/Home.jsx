import React from 'react';
import { Link } from "react-router-dom";
import Beers from "./../assets/beers.png";
import randomBeer from "./../assets/random-beer.png";
import newBeer from "./../assets/new-beer.png";

const Home = () => {
    return (
    <section>
        <div>
            <Link to={`/beers/all`}>
                <img className="homeImg" src={Beers} alt=""/>
                <h2>All beers</h2>
            </Link>
        </div>

        <div>
            <Link to={`/beers/random`}>
                <img className="homeImg" src={randomBeer} alt=""/>
                <h2>Random beer</h2>
            </Link>
        </div>

        <div>
            <Link to={`/beers/new`}>
                <img className="homeImg" src={newBeer} alt=""/>
                <h2>New beer</h2>
            </Link>
        </div>
    </section>
    )
}

export default Home