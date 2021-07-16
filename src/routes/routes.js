import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Beers from '../components/Beers'
import Home from '../components/Home'
import BeerDetails from '../components/BeersDetails'
import RandomBeer from '../components/RandomBeer'

const Routes = () => {

    return (
        <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route path="/beers" exact render={() => <Beers />} />
            <Route path="/beers/:beer_id" render={props => <BeerDetails {...props} />} />
            <Route path="/random-beer" render={() => <RandomBeer />} />
        </Switch>
    )
}

export default Routes