import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home'
import BeersAll from './components/Beers/Beer_all';
import BeerDetail from './components/Beers/Beer_Detail';
import RandomBeer from './components/Beers/Random_Beer';
import FormBeer from './components/Form/Form_Beer';

const Router = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/beers" component={BeersAll}/>
        <Route path="/single/:id" component={BeerDetail}/>
        <Route path="/random-beer" component={RandomBeer}/>
        <Route path="/new-beer" component={FormBeer}/>
    </Switch>
);

export default Router;