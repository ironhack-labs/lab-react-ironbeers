import React from 'react'
import { Route, Switch } from 'react-router';
import BeerDetail from '../BeerDetail/BeerDetail';
import Beers from '../Beers/Beers';
import NewBeer from '../NewBeer/NewBeer';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" />
            <Route exact path="/beer/:id" component={BeerDetail} />
            <Route exact path="/beers" component={Beers} />
            <Route exact path="/new-beer" component={NewBeer} />
            <Route exact path="/random-beer" component={BeerDetail} />
        </Switch>
    )
}

export default Router
