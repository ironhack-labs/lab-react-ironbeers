import React from 'react';
import { NavLink } from 'react-router-dom';
// import Beers from '../beers/Beers';
// import RandomBeer from '../randomBeer/RandomBeer';
// import NewBeer from '../newBeer/NewBeer';

export default function Home() {
    return (
        <div>
            <div>
                <NavLink exact to="/beers">Beers</NavLink>
                <NavLink exact to="/random-beer">Random beer</NavLink>
                <NavLink exact to="/new-beers">New beer</NavLink>
            </div>
        </div>
    );
}
