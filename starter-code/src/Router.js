import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import BeerAll from './components/beers/BeerAll';
import BeerDetail from './components/beer/BeerDetail'
import RandomBeer from './components/beer/RandomBeer'


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/beers" component={BeerAll} />
      <Route exact path="/beers/:id" component={BeerDetail} />
      <Route exact path="/beers/random" component={RandomBeer} />
    </Switch>
  </BrowserRouter>
);

export default Router;