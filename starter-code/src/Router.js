
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import BeerForm from './components/beers/BeerForm'
import BeerAll from './components/beers/BeerAll'
import BeerRandom from './components/beers/BeerRandom'
import BeerDetail from './components/beers/BeerDetail'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/beers/random-beer' component={BeerRandom} />
            <Route exact path='/beers' component={BeerAll} />
            <Route exact path='/beers/new-beer' component={BeerForm} />
            <Route exact path='/beers/:id' component={BeerDetail} />
        </Switch>
    </BrowserRouter>
);

export default Router;

