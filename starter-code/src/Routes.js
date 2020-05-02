import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import BeerList from './components/BeerList';
import BeerDetail from './components/BeerDetail';
import CreateForm from './components/CreateForm';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/beers" component={ BeerList } />
        <Route exact path="/beers/:id" component={ BeerDetail } />
        <Route exact path="/beers/random" component={ BeerDetail } />
        <Route exact path="/new" component={ CreateForm } />
    </Switch>
)

export default Routes;