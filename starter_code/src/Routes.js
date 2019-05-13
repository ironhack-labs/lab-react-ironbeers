import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './components/Home';
import AllBeers from './components/AllBeers';
import RouteError from './components/RouteError';
import RandomBeers from './components/RandomBeers';
import NewBeer from './components/NewBeer';

const Routes = () => (
    <Switch>
        <Route exact path={'/'} component={Home}/>
        <Route exact path={'/beers'} component={AllBeers}/>
        <Route exact path={'/randombeer'} component={RandomBeers}/>
        <Route exact path={'/new'} component={NewBeer}/>
        <Route  component={RouteError}/>
    </Switch>
)

export default Routes
