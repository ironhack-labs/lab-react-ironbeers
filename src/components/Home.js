import beersimg from '../assets/beers.png'
import new_beerimg from '../assets/new-beer.png';
import random_beer from '../assets/random-beer.png';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Home() {
  return (    
    <div>
    <img src={beersimg}></img>
    <NavLink to ="/list">
    <h1>All Beers</h1>
    </NavLink>

    <img src={new_beerimg}></img>
    <NavLink to="/random">
    <h1>Random Beer</h1>
    </NavLink>

    <img src={random_beer}></img>
    <NavLink to="/newbeer">
    <h1>New Beer</h1>
    </NavLink>
    </div>    
  )
}
export default Home