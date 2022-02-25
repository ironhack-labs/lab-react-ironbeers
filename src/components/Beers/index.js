import NavBar from '../NavBar'
import { useState, useEffect } from 'react';
import './styleBeers.css'
import { Link } from 'react-router-dom';

const URL = `https://ih-beers-api2.herokuapp.com/beers`;

const Beers = () => {
    const [ beers, setBeers ] = useState([]);
    return(
        <div className='Beers'>
        <header><NavBar/></header>
            <div>
            <h1> Beers </h1>
            </div>
        </div>
    )
};

export default Beers;