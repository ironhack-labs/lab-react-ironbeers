import React from 'react';
import {NavLink} from 'react-router-dom';
import beersImage from '../assets/beers.png';
import randomBeerImage from '../assets/random-beer.png';
import newBeerImage from '../assets/new-beer.png';

const Home = () => {
    return (
        <div className='Home'>
        <NavLink to="/beers">
            <img src={beersImage} alt="beers" />
            <h2>All Beers</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
        </NavLink>
        <NavLink to="/random-beer">
            <img src={randomBeerImage} alt="random-beer" />
            <h2>Random Beer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
        </NavLink>
        <NavLink to="/new-beer">
            <img src={newBeerImage} alt="new-beer" />
            <h2>New Beer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
        </NavLink>
        </div>
    )
}

export default Home;
