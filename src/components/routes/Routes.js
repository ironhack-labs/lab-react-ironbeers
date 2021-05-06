import React from 'react'

import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/index/HomePage'
import Beers from '../pages/beers/Beers'
import BeerDetails from '../pages/beers/BeerDetails'
import NewBeer from '../pages/beers/NewBeer'

const Routes = () => {

    return (
        <>
        <Switch>
            <Route path="/" exact render={() => <HomePage />} />
            <Route path="/beers" render={() => <Beers />} />
            <Route path="/new-beer" render={() => <NewBeer />} /> 
            <Route path="/:id" render={props => <BeerDetails {...props} />} /> 
            <Route path="/random-beer" render={() => <BeerDetails />} />
        </Switch>
        </>
        

    )
}

export default Routes