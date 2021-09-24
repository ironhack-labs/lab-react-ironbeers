import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <Link to="/beers">All Beers</Link>
            <br />
            <img src="../assets/beers.png" width="300px" alt="All Beers logo" />
            <br />

            <Link to="/random-beer">Random Beer</Link>
            <br />
            <img src="../assets/random-beer.png" width="300px" alt="Random Beer logo" />
            <br />

            <Link to="/new-beer">New Beer</Link>
            <br />
            <img src="../assets/new-beer.png" width="300px" alt="New Beer logo" />
            <br />



        </div>
    )
}
