import React from 'react';

import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
import AllBeers from '../pages/AllBeers/AllBeers'
import BeerDetails from '../pages/LonelyBeers/BeerDetails'
import NewBeer from '../pages/NewBeer/NewBeer'
import RandomBeer from '../pages/LonelyBeers/RandomBeer'

const Routes = () => {
    return (
        <Switch>
            <Route path = "/" exact render = {() => <Home />} />
            <Route path = "/beers" exact render = {() => <AllBeers />} />
            <Route path = "/beers/:id"  render = {props => <BeerDetails {...props}/>} />
            <Route path = "/random-beer" render = {() => <RandomBeer />} />
            <Route path = "/new-beer" render = {() => <NewBeer />} />
        </Switch>
    )
}

export default Routes
