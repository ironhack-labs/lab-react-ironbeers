import React, { Component } from 'react'
import beersImage from '../assets/beers.png';
import newBeerImage from '../assets/new-beer.png';
import randomBeerImage from '../assets/random-beer.png';
import {Link} from 'react-router-dom';

export default class Home extends Component {
    render() {

        return (
            <div>
                <img src={beersImage} alt="all beers" />
                <Link to='/beers'>
                    <h2>All Beers</h2>
                </Link>
                    <p>This is a sample text.</p>
                <img src={randomBeerImage} alt="random beer" />
                <Link to='/random-beer'>
                    <h2>Random Beer</h2>
                </Link>
                    <p>This is a sample text.</p>
                <img src={newBeerImage} alt="new beer" />
                <Link to='/create-beer'>
                    <h2>Create a beer</h2>
                </Link>
                 <p>This is a sample text.</p> 
            </div>
        )
    }
}
