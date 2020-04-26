import React, { Component } from 'react';
import HomeDetail from './HomeDetail';

class Home extends Component {
    render() {
        return (
            <div>
                <HomeDetail img='images/beers.png' alt='beers' title='All Beers' linkTo='/beers' />
                <HomeDetail img='images/random-beer.png' alt='random-beer' title='Random Beer' linkTo='/random-beer' />
                <HomeDetail img='images/new-beer.png' alt='new-beer' title='New Beer' linkTo='/new-beer' />
            </div>
        );
    }
}

export default Home;