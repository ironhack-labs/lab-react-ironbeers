import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeContainer from './components/home/HomeContainer';
import BeersContainer from './components/beers/BeersContainer';
import BeerContainer from './components/beer/BeerContainer'
import BeerRandom from './components/beer/BeerRandom'
import FormBeer from './components/beers/FormBeer';


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/beers" component={BeersContainer} />
      <Route exact path="/beers/random" component={BeerRandom} />
      <Route exact path="/beers/new" component={FormBeer} />

     
      <Route exact path="/beers/:id" component={BeerContainer} />
    </Switch>
  </BrowserRouter>
);

export default Router;