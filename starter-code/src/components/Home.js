import React from 'react';

import { Link } from 'react-router-dom';
import beer from '../images/beers.png';
import randomBeer from '../images/random-beer.png';
import newBeer from '../images/new-beer.png';

export const Home = () => 

        <div>
            <Link to="/beers">
                <img src={beer} alt="Beer"/>
                <h1>All Beers</h1>
                <p>lorem lorem loemr loerm lorem lorem loemr loerm lorem lorem loemr loerm lorem lorem loemr loerm</p>
            </Link>
            <Link to="/randombeer">
                <img src={randomBeer} alt="Beer taps pic"/>
                <h1>Random Beer</h1>
                <p>lorem lorem loemr loerm lorem lorem loemr loerm lorem lorem loemr loerm lorem lorem loemr loerm</p>
            </Link>
            <Link to="/newbeer">
                <img src={newBeer} alt="Pic of a pint of beer"/>
                <h1>New Beer</h1>
                <p>lorem lorem loemr loerm lorem lorem loemr loerm lorem lorem loemr loerm lorem lorem loemr loerm</p>
            </Link>
        </div>

export default Home;