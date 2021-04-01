import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Beers from './Beers';
import BeerDetail from './BeerDetail';
// import NewBeer from './NewBeer';

const AppRouter = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/beers' component={Beers} />
            {/* <Route exact path='/beers/random' component={SingleBeer} /> */}
            <Route exact path='/beers/:id' component={BeerDetail} />
            {/* <Route exact path='/beers/new' component={NewBeer} /> */}
        </Switch>
    )
}

export default AppRouter;