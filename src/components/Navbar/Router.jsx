import React from 'react'
import { Route, Switch } from 'react-router';
import BeerDetail from '../BeerDetail/BeerDetail';
import Beers from '../Beers/Beers';
import Home from '../Home/Home';
import NewBeer from '../NewBeer/NewBeer';
import RandomBeer from '../RandomBeer/RandomBeer';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/beer/:id" component={BeerDetail} />
            <Route exact path="/beers" component={Beers} />
            <Route exact path="/new-beer" component={NewBeer} />
            <Route exact path="/random-beer" component={RandomBeer} />
        </Switch>
    )
}

export default Router
