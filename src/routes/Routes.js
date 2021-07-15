import React from 'react'
import { Switch, Route } from 'react-router-dom'
import IndexPage from "../components/IndexPage"
import BeersList from '../components/BeersList'

const Routes = () => {
    return (
        <Switch>
            <Route path="/beers" exact render={() => <BeersList />} />
            <Route path="/" exact render={() => <IndexPage />} />
        </Switch>
    )
}

export default Routes