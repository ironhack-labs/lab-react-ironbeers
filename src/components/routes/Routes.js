import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min"
import App from "../App"
import React from 'react'
import Beers from '../Beers'
import BeerDetail from '../BeerDetail'
import RandomBeer from '../RandomBeer'
import NewBeer from '../NewBeer'


const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact render={() => <App />} />
            <Route path="/beers" exact render={() => <Beers />} />
            <Route path="/beers/details/:beer_id" render={props => <BeerDetail {...props} />} />
            <Route path="/random-beer" render={() => <RandomBeer />} />
            <Route path="/new-beer" render={() => <NewBeer />} />
        </Switch>
    )
}

export default Routes