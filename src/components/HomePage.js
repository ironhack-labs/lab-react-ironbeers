import React from "react";
import { Link } from 'react-router-dom';
import beerImages1 from '../assets/beers.png'
import beerImages2 from '../assets/new-beer.png'
import beerImages3 from '../assets/random-beer.png'

function HomePage() {
    return (
        <div className="homeP">
            <Link to="/beers">All Beers <img src={beerImages1}/></Link>
            <Link to="/random-beer">Random Beer <img src={beerImages2}/></Link>
            <Link to="/new-beer">New Beer <img src={beerImages3}/></Link>
        </div>
    );
}

export default HomePage;