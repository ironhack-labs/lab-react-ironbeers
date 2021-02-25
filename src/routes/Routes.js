import { Switch, Route } from 'react-router-dom'
import React from 'react';


import IndexPage from './../components/index'
import Beers from './../components/Beers'
import Beer from './../components/Beer-details'
import NewBeer from '../components/new-beer'
import RandomBeer from '../components/Random-beer'

const Routes = () => {

    return (
        <Switch>
            <Route path="/" exact render={() => <IndexPage />} />
            <Route path="/beers" render={() => <Beers />} />
            <Route path="/new" render={() => <NewBeer />} />
            <Route path="/:id" render={props => <Beer  {...props} />} />
            {/* <Route path="/detalles/:coaster_id" render={props => <CoasterDetails {...props} />} /> */}
        </Switch>
    )
}

export default Routes