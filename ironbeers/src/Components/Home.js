import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom';
import Beers from './Beers';
import NewBeer from './NewBeer';
import RandomBeer from './RandomBeer';
import BeerImage from '../img/beers.png'
import NewBeerImage from '../img/new-beer.png'
import RandomBeerImage from '../img/random-beer.png'


export default class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <img src={BeerImage} alt="beers"/>
                    <br></br>
                    <Link to='/beers'>beers</Link>
                    <p>I love beer</p>
                </div>
                <div>
                    <img src={NewBeerImage} alt="beers"/>
                    <br></br>
                    <Link to='/new-beer'>new beers</Link>
                    <p>New better even better</p>
                </div>
                <div>
                <img src={RandomBeerImage} alt="beers"/>
                    <br></br>
                    <Link to='/random-beer'>random beer</Link>
                    <p>Random beer not so nice</p>
                </div>
                <Switch>
                    <Route path='/beers' component={Beers} />
                    <Route path='/new-beer' component={NewBeer} />
                    <Route path='/random-beer' component={RandomBeer} />
                </Switch>
            </div>

        )
    }
}
