import React from 'react';
import Link from 'react-router';

function Home() {
    return (
        
     <div>
            
        <div>
            <Link to='/ListBeers'>
                <h1>List of Beers</h1>
            </Link>
            <p>description</p>

        </div>
        <div>
            <Link to='/RandomBeer'>
                <h1>Beer</h1>
            </Link>
            <p>description</p>


        </div>
        <div>
            <Link to='/NewBeer'>
                <h1>New Beer</h1>
            </Link>
            <p>description</p>

        </div>

        
        </div>
    )
}



















export default Home