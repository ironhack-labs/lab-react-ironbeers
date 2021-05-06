import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Home from '../pages/Home'
import Beers from '../pages/Beers'
import BeerDetails from '../pages/BeerDetails'
import RandomBeer from '../pages/RandomBeer'
import NewBeer from '../pages/NewBeer'

const Routes = () => {

    return (

        <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route path="/beers" exact render={() => <Beers />} />
            <Route path="/beers/:beer_id" render={props => <BeerDetails {...props} />} />
            <Route path="/random" render={() => <RandomBeer />} /> 
            <Route path="/new" render={() => <NewBeer />} />
        </Switch>

    )
}

export default Routes