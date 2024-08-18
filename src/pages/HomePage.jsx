import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to IronBeers</h1>
            <nav>
                <ul>
                    <li> <Link to="/beers">All Beers</Link></li>
                    <li> <Link to="/random-beer">Random Beer</Link></li>
                    <li> <Link to="/new-beer">New Beer</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default HomePage;
