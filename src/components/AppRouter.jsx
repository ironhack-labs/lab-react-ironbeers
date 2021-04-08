import React from 'react';
import { Route, Switch } from 'react-router';
import HomePage from '../components/HomePage'
import Beers from '../components/Beers'
import BeerDetail from '../components/BeerDetail';
import RandomBeer from '../components/RandomBeer'
import NewBeer from '../components/NewBeer';

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/beers" component={Beers} />
            <Route exact path="/random-beer" component={RandomBeer} />
            <Route exact path="/new-beer" component={NewBeer}/>
            <Route exact path="/beers/:id" component={BeerDetail} />
        </Switch>
    );
};

export default AppRouter;