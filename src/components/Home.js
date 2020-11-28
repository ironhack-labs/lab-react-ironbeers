import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <button><Link to={`/Beers`}>All beers</Link> </button>
            <button><Link to={`/RandomBeer`}>Random beer</Link> </button>
            <button><Link to={`/NewBeer`}>New beer</Link> </button>
        </div>
    )
}

export default Home