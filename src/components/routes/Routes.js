import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Home from './../pages/Home'
import Beers from './../pages/Beers'
import BeerDetails from './../pages/BeerDetails'
import RandomBeer from './../pages/RandomBeer'
import NewBeer from './../pages/NewBeer'


const Routes = () => {

    return (

        <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route path="/beers" exact render={() => <Beers />} />
            <Route path="/beers/:beers_id" render={props => <BeerDetails {...props} />} />
            <Route path="/new" render={() => <NewBeer />} />
            <Route path="/randomBeer" render={() => <RandomBeer />} />

        </Switch>

    )
}

export default Routes