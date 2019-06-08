import React from 'react';
import { Link } from 'react-router-dom';
import Header from './misc/Header';
import Beers from '../img/beers.png'
import RandomBeers from '../img/random-beer.png'
import NewBeers from '../img/new-beer.png'

function Home() {
  return (
    <div className="Home">
    <Header />
    <br/>
    <Link to="/beers"><img src={NewBeers} class="img-fluid" alt="New Beers!"/></Link>
    <div className="mb-5"></div>
    <Link to="/beers"><img src={Beers} class="img-fluid" alt="All Beers!"/></Link>
    <div className="mb-5"></div>
    <Link to="/beers"><img src={RandomBeers} class="img-fluid" alt="Random Beers!"/></Link>
    </div>
  );
}

export default Home;
