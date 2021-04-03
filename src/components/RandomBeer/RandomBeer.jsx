import React from 'react';
import './RandomBeer.css'
import NavBar from '../NavBar/NavBar'

const RandomBeer = () => {
    return (
        <div className='RandomBeer'>
            <NavBar />
            <h1>random beer</h1>    
        </div>
    );
};

export default RandomBeer;