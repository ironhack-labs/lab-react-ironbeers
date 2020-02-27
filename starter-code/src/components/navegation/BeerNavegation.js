import React, { Component } from 'react';
//import ListBeers from './components/ListBeers'

import { Link } from 'react-router-dom'


class BeerNavegation extends Component {


    render() {
        return (
            <div>
            <Link to={'/beers'}>
            <img src='../../../images/beers.png' alt="beers"/>
            <h2>All Beers</h2>
            <p>lorem impsum </p>
      </Link>

            <Link to={'/beers/random'}>
            <img src='../images/random-beer.png' alt="beer random"></img>
            <h2>Random Beers</h2>
            <p>lorem impsum </p>
            </Link>

            <Link to={'/beers/random'}>
            <img src='../images/new-beer.png' alt="new beer"></img>
            <h2>New Beers</h2>
            <p>lorem impsum hf</p>
            </Link >

            </div>
    
    );
    }
}

export default BeerNavegation