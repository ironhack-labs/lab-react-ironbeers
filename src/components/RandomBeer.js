import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const RandomBeer = () => {
    return (
        <div>
         <Navbar />
            <h1>RANDOM BEERS</h1>
        </div>
    )
}

export default RandomBeer;