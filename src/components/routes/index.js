import React from 'react'
import { Switch, Route } from 'react-router-dom'
import BeersList from '../pages/BeersPage/BeersList'
import IndexPage from './../pages/Home/IndexPage'



const Routes = () => {

    return (
        <Switch>
            <Route path="/" exact render={() => <IndexPage />} />
            <Route path="/beers" exact render={() => <BeersList />} />
            <Route path="/beers/:id" render={props => <BeersList {...props} />} />
        </Switch>
    )
}

export default Routes