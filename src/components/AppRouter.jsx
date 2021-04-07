import React from 'react';
import { Route, Switch } from 'react-router';
import HomePage from '../components/HomePage'
import Beers from '../components/Beers'

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/beers" component={Beers} />
        </Switch>
    );
};

export default AppRouter;