import React from 'react'
import { Switch, Route } from 'react-router-dom';
import HomePage from "../Home-page"
import Beers from '../Beers'
import BeerId from '../Beer-Id'

const Routes = () => {

    return (

        <Switch>
            <Route path="/" exact render={() => <HomePage />} />
            <Route path="/beers" render={() => <Beers />} />
            <Route path="/beers/:beer_id" render={props => <BeerId {...props} />} />
        </Switch>

    )
}

export default Routes