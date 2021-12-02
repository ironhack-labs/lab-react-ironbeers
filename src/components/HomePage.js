import { buildQueries } from '@testing-library/dom';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import beers from '../assets/beers.png';
import randomBeer from '../assets/random-beer.png';
import newBeer from '../assets/new-beer.png';

class HomePage extends Component {

    render() {
        
    return (
        <div className = "container">
        <h1>Always Beers</h1>
        <Link to="/beers">
            <div>
                <img src={beers} alt= "allBeers" />
                <h2>All Beers</h2>
                <p> Me encantan las cervezas, ojala probarlas todas!!</p>
            </div>
        </Link>
        <Link to="/random-beer">
            <div>
                <img src={randomBeer} alt= "random beer" />
                <h2>Random Beer </h2>
                <p> Que cerveza me saldrá de forma aleatoria????</p>
            </div>
        </Link>
        <Link to="/new-beer">
            <div>
                <img src={newBeer} alt= "new beer" />
                <h2>New Beer </h2>
                <p> Vamos a crear una cerveza!!</p>
            </div>
        </Link>
        </div>
    )
 }
}
export default HomePage;