import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from './../pages/homepage/homepage'
import BeerList from './../pages/beer/beersList'
import RandomBeer from './../pages/random-beer/random-beer'
import NewBeer from './../pages/new-beer/new-beer'
import BeerDetails from './../pages/beer/beerDetails'


const Routes = () => {

    return (
        <Switch>
            <Route path="/" exact render={() => <HomePage />} />
            <Route path="/beers" exact render={() => <BeerList />} />
            <Route path="/random-beer"  render={() => <RandomBeer />} />
            <Route path="/beers/:beer_id" render={props => <BeerDetails {...props} />} />
            <Route path="/new-beer"  render={() => <NewBeer />} />
        </Switch>
    )
}

export default Routes