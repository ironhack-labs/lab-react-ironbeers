import React from 'react'
import { Switch, Route } from 'react-router-dom'
import IndexPage from '../components/pages/IndexPage/IndexPage'
import BeersPage from '../components/pages/BeersPage/BeersPage'
import BeerDetails from '../components/pages/BeerDetails/BeerDetails'


const Routes = () => {

    return (

        <Switch>
            <Route path="/" exact render={() => <IndexPage />} />
            <Route path="/beers" exact render={() => <BeersPage />} />
            <Route path="/beers/:beer_id" render={props => <BeerDetails {...props} />} />

        </Switch>
    )
}

export default Routes