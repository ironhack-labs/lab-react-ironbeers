import React, { Component } from 'react';

// The Home page shows three links 
// to the All Beers page, the Random beer page and the New beer page
import { Link } from 'react-router-dom';

import './Home.css';

export class Home extends Component {

    // let's assume all the beers are in the props
    constructor(props){
        super(props);
    }

    render() {
        // good to go
        return (
            <div>
                <div className='App-link'>
                    <img src='/images/beers.png' alt='beers'></img>
                    <Link to='/all-beers/'>All beers</Link>
                    Click the link to get a list of all beers.
                </div>
                <div className='App-link'>
                    <img src='/images/random-beer.png' alt='random'></img>
                    <Link to='/random-beer/'>Random beer</Link>
                    Click the link to get information on one of the beers.
                </div>
                <div className='App-link'>
                    <img src='/images/new-beer.png' alt='new beer'></img>
                    <Link to='/new-beer/'>Add a beer</Link>
                    Click the link to view a form for entering new beer data to be submitted to the beer database.
                </div>
            </div>    
        );
    }
}

export default Home;
