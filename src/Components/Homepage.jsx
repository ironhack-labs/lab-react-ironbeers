import React from 'react'
import beers from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'
import {Link} from 'react-router-dom';

function Homepage() {
    return (
    <nav>
    <h1>Homepage</h1>

    <Link to="/Beers"><img src={beers} alt="beers" /></Link>
   
    <h1 className=''>All beers</h1>
    
  
    <Link to="/New-beer"><img src={newBeer} alt="beers"/></Link>
    
    <h1 className=''>Random beer</h1>
   

    <Link to="/Random-beer"><img src={randomBeer} alt="beers"/></Link>
   
    <h1 className=''>New beer</h1>
    </nav>

    )}

    export default Homepage;