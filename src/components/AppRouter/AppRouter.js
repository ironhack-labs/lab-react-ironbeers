import React from 'react';
import Home from '../Home/Home';
import AllBeers from '../AllBeers/AllBeers';
import RandomBeers from '../RandomBeers/RandomBeers';
import NewBeer from '../NewBeer/NewBeer';
import { Route, Switch } from 'react-router-dom';

const AppRouter = () => {


    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Allbeers' component={AllBeers} />
            <Route exact path='/RandomBeers' component={RandomBeers} />
            <Route exact path='/NewBeers' component={NewBeer} />
        </Switch>
    )
}

export default AppRouter