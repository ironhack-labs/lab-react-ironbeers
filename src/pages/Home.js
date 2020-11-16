import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import ListBeers from './ListBeers';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer';
class Home extends Component {
    render() {
        return (
            <div>
                <img src="https://user-images.githubusercontent.com/23629340/40706572-933439b8-63ee-11e8-8d65-538fb59f79ab.png" alt="" height="600px" />
                <Link to='/list-beers'> <h1>All beers</h1> </Link>
                <Link to='/new-beer'> <h1>New beers</h1></Link>
                <Link to='/random-beer'> <h1>Random beers</h1></Link>
            </div>
        )
    }
}
export default Home
