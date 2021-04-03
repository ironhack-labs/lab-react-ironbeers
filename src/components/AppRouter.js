import React from 'react';
import { Route, Switch } from 'react-router';
import BeerList from './BeersList/BeerList';
import Home from './Home/Home'
import BeerDetails from './BeerDetails/BeerDetails'
import BeerRandom from './BeerRandom/BeerRandom';
import NewBeer from './NewBeer/NewBeer';

function AppRouter() {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/beers' component={BeerList} />
            <Route exact path='/beers/random-beer' component={BeerRandom}/>
            <Route exact path='/beers/:id' component={BeerDetails} />
            <Route exact path='/new-beer' component={NewBeer}/>
        </Switch>
    );
}

export default AppRouter;