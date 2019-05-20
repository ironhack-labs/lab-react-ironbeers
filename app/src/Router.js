import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import Beers from './components/Beers'
import Beer from './components/Beer'

const Router = () => (
    <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/beers" render={() => <Beers />} />
        <Route exact path={'/beers/:id'} component={Beer} state={{}} />
    </Switch>
)



export default Router;