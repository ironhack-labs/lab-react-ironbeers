import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <Link to="/beers">
                <img src='../../images/beers.png' alt='allbeers'></img>
                <h2>All Beers</h2>
                <p>Check all</p>
            </Link>
            <Link to="/random-beer">
                <img src='../../images/random-beer.png' alt='random beer'></img>
                <h2>Random Beer</h2>
            </Link>
            <Link to="/new-beer">
                <img src='../../images/new-beer.png' alt='new beer'></img>
                <h2>New Beer</h2>
            </Link>
        </div>
    );
}