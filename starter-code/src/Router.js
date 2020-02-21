import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Beers from './pages/beers'
import BeerDetail from './pages/beerDetail'
import RandomBeer from './pages/randomBeer'


function Router() {
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/beers' component={Beers}/>
            <Route exact path='/beers/:id' component={BeerDetail}/>
            <Route exact path='/random-beer' component={RandomBeer}/>
            <Route exact path='/new-beer' component={Beers}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Router;