import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import BeerForm from './components/BeerForm'
import BeerAll from './components/BeerAll'
import BeerRandom from './components/BeerRandom'
import BeerDetail from './components/BeerDetail'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/random-beer' component={BeerRandom} />
            <Route exact path='/beers' component={BeerAll} />
            <Route exact path='/new-beer' component={BeerForm} />
            <Route exact path='/beers/:id' component={BeerDetail} />
        </Switch>
    </BrowserRouter>
);

export default Router;