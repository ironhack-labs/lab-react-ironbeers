import React from 'react';
import randomBeerImg from '../assets/random-beer.png'
import newBeerImg from '../assets/new-beer.png'
import beersImg from '../assets/beers.png'
import { NavLink, Link } from 'react-router-dom';
import { BrowserRouter, Routes } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <div>
                <img src={beersImg} height="400" width="1000" />
                <Link to="/beers">
                    <h1>All Beers</h1>
                </Link>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>

            <div>
                <img src={randomBeerImg} height="400" width="1000" />
                <Link to="/random-beer">
                    <h1>Random Beer</h1>
                </Link>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>


            <div>
                <img src={newBeerImg} height="400" width="1000" />
                <Link to="/new-beer">
                    <h1>New Beer</h1>
                </Link>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>


        </div>

    );
};

export default HomePage;
