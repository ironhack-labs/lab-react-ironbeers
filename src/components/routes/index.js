import React from 'react'
import { Switch, Route } from 'react-router-dom'
import IndexPage from '../pages/HomePage/Homepage'
import BeersListPage from './../pages/BeersPage/BeersListPage'
// import BeerDetails from '../pages/BeerDetailsPage/BeerDetails'

const Routes = () => {

    return (
        <Switch>
            <Route path="/" exact render={() => <IndexPage />} />
            <Route path="/all-beers"  render={() => <BeersListPage />} />
            {/* <Route path="/beerdetails/:beer_id"  render={() => <BeerDetails />} /> */}
        </Switch>
    )
}

export default Routes