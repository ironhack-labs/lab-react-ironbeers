import React from 'react';
import allBeersImage from '../assets/beers.png';
import randomBeerImage from '../assets/random-beer.png';
import newBeerImage from '../assets/new-beer.png';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div>
            <h1>Home page</h1>
            <div>
                <div className="homeImageLinks">
                    <img className="imagesHome" src={allBeersImage} alt="All beers"/>
                    <br/>
                    <Link to="/beers">See All Beers</Link>
                </div>
                <div className="homeImageLinks">
                    <img className="imagesHome" src={randomBeerImage} alt="Random beer"/>
                    <br/>
                    <Link to="/random-beer">See Random Beer</Link>
                </div>
                <div className="homeImageLinks">
                    <img className="imagesHome" src={newBeerImage} alt="New beer"/>
                    <br/>
                    <Link to="/new-beer">Add New Beer</Link>
                </div>
            </div>
        </div>
    )
};

export default Home;