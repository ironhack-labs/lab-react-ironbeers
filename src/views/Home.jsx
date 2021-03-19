import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import randomBeerImage from './../assets/random-beer.png';
import newBeerImage from './../assets/new-beer.png';
import beersImage from './../assets/beers.png';

class Home extends Component {
    render() {
        return (
            <div>
                <Link to={'/beers'}>
                    <img src={beersImage} alt=""/>
                    All Beers   
                    </Link>
                <Link to={'/random-beer'}>
                    <img src={randomBeerImage} alt=""/>
                    Random Beer   
                </Link>
                <Link to={'/new-beer'}>
                    <img src={newBeerImage} alt=""/>
                    New Beer   
                    </Link>
            </div>
        )
    }
}

export default Home
