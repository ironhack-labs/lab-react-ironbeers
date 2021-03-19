import React from 'react';
import { Link } from 'react-router-dom';
import beerIMG from './../assets/beers.png';
import newBeerImg from './../assets/new-beer.png';
import randomBeer from './../assets/random-beer.png';


function Home() {
    return (
        <nav>
        <p><Link to='/beers'> <img src={beerIMG} alt="dada"></img></Link></p> 
        <p><Link to='/random-beer'> <img src={newBeerImg} alt="doda"></img></Link></p> 
        <p><Link to='/new-beer'> <img src={randomBeer} alt="dida"></img></Link></p> 
        </nav>
            
        
    )
}

export default Home
