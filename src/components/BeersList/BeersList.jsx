import React from 'react';
import './BeersList.css'
import NavBar from '../NavBar/NavBar'

const BeersList = () => {
    return (
        <div className='BeersList'>
            <NavBar /> 
            <h1>Beers List</h1>
        </div>
    );
};

export default BeersList;