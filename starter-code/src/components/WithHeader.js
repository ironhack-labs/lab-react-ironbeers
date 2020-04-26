import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Beers from './Beers';
import ChosenBeer from './ChosenBeer';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer';
import './WithHeader.css';

class WithHeader extends Component {
    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <header>
                    <Link className='WithHeader-Link' to='/'>
                        <i className="fa fa-home"></i>
                    </Link>
                </header>
                <Switch>
                    <Route exact path='/beers' component={Beers} />
                    <Route exact path='/beers/:id' component={ChosenBeer} />
                    <Route exact path='/random-beer' component={RandomBeer} />
                    <Route exact path='/new-beer' component={NewBeer} />
                </Switch>
            </div>
        );
    }
}

export default WithHeader;