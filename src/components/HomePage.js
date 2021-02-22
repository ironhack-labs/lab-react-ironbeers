import React from 'react';
import { Link } from 'react-router-dom';

function HomePage () {
    return (
        <div classname= 'home'>
            <div>
                <Link to="/beers">
                <img src={require('../assets/beers.png')} alt='beers' />
                </Link>
                <h2>All Beers</h2>  
                <p>vdfgbgfhhjghjjkhjkhjkhjkhjkkkjhkhjkhjkjj, :jl:kl:k;lhg;,fghjhkjl;hgfgfdgh</p>
            </div>
            <div>
                <Link to="/random-beer">
                <img src={require('../assets/random-beer.png')} alt='random-beer' />
                </Link>
                <h2>Random Beer</h2>
                <p>vdfgbgfhhjghjjkhjkhjkhjkhjkkkjhkhjkhjkjj, :jl:kl:k;lhg;,fghjhkjl;hgfgfdgh</p>
            </div>
            <div>
                <Link to="/new-beer">
                <img src={require('../assets/new-beer.png')} alt='new-beer' />
                </Link>
                 <h2>New Beer</h2>
                <p>vdfgbgfhhjghjjkhjkhjkhjkhjkkkjhkhjkhjkjj, :jl:kl:k;lhg;,fghjhkjl;hgfgfdgh</p>
            </div>
        </div>
    )
}

export default HomePage 