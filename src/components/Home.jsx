import React from 'react';
import {Link} from 'react-router-dom';


const Home = () => {
    return (
        <div className="homepage-container">
            <Link to="/beers">All Beers</Link>
            <Link to="/random-beer">Random Beer</Link>
            <Link to="/new-beer">New Beer</Link>
        </div>
    )
}

export default Home
