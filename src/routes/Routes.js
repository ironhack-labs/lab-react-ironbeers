import { Route, Switch } from "react-router-dom"
import App from "../components/App"
import React from 'react'
import BeerDetails from '../components/BeerDetails'
import RandomBeer from '../components/RandomBeer'
import AllBeers from "../components/AllBeers"
import CreateBeer from "../components/CreateBeer"


const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact render={() => <App />} />
            <Route path="/beers" exact render={() => <AllBeers />} />
            <Route path="/random-beer" render={() => <RandomBeer />} />
            <Route path="/beers/details/:beer_id" render={props => <BeerDetails {...props} />} />
            <Route path="/new-beer" render={() => <CreateBeer />} />
        </Switch>
    )
}

export default Routes