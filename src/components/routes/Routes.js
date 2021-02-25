import React from 'react';

import { Switch, Route, BrowserRouter } from 'react-router-dom'

import HomePage from '../pages/Home/home'
import AllBeers from '../pages/ListBeers/ListBeers'
import RandomBeer from '../pages/RandomBeer/RandomBeer'
import NewBeer from '../pages/NewBeer/NewBeer'

const Routes = () => {

    return(
        <BrowserRouter>

        <Switch>
            <Route path="/" exact render={() => <HomePage />} />
            <Route path="/beers-list" render={() => <AllBeers />} />
            <Route path="/:beer_id" exact render={() => <RandomBeer />} />
            <Route path="/new" exact render={() => <NewBeer />} />
        </Switch>
        </BrowserRouter>
    )
}

export default Routes