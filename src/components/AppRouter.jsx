import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Beers from './Beers';
import BeerDetail from './BeerDetail';
import NewBeer from './NewBeer';
// import RandomBeer from './RandomBeer';

const AppRouter = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/beers' component={Beers} />
            <Route exact path='/beers/new' component={NewBeer} />
            <Route exact path='/beers/:id' component={BeerDetail} />
            {/* <Route exact path='/beers/random' component={RandomBeer} /> */}
        </Switch>
    )
}

export default AppRouter;