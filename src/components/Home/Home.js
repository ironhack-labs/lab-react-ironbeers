import React from 'react';
import {NavLink} from 'react-router-dom';

function Home() {
    return (
        
     <div>
            
        <div>
            <NavLink to='/ListBeers'>
                <h1>List of Beers</h1>
            </NavLink>
            <p>description</p>

        </div>
        <div>
            <NavLink to='/RandomBeer'>
                <h1>Beer</h1>
            </NavLink>
            <p>description</p>


        </div>
        <div>
            <NavLink to='/NewBeer'>
                <h1>New Beer</h1>
            </NavLink>
            <p>description</p>

        </div>

        
        </div>
    )
}



















export default Home