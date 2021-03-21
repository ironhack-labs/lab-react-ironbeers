import React from 'react';
import BeersImage from './../assets/beers.png';
import RandomBeerImage from './../assets/random-beer.png';
import NewBeerImage from './../assets/new-beer.png';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <div id="homepage">
                <Link to={'/beers'}>
                    <img src={BeersImage} alt="beers-page" className="homepageLinks" /> <br />
                    <h1>All beers</h1>
                    </Link>
                <Link to={'/random'}>
                    <img src={RandomBeerImage} alt="random-beer-page" className="homepageLinks" /> <br />
                    <h1>Random beer</h1>
                    </Link>
                <Link to={'/new'}>
                    <img src={NewBeerImage} alt="new-beer-page" className="homepageLinks" /> <br />
                    <h1>New beer</h1>
                    </Link>
            </div>
        </div>
    )
}

export default Navbar;
