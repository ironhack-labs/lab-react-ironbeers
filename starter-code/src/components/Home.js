import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

class Home extends Component {

    render() {
        return (
            <div className=''>
                <Link to='/beers'><Card title='All Beers' image='/images/beers.png' /></Link>
                <Link to='/random-beer'><Card title='Random Beer' image='/images/random-beer.png' /></Link>
                <Link to='/new-beer'><Card title='New Beer' image='/images/new-beer.png' /></Link>
            </div>
        )
    }
}
export default Home;