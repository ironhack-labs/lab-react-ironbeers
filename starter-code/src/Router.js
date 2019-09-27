import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import BeerAll from './components/beers/BeerAll';
import BeerDetail from './components/beer/BeerDetail'
import RandomBeer from './components/beer/RandomBeer'
import BeerForm from './components/beers/BeerForm';


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/beers" component={BeerAll} />
      <Route exact path="/beers/random" component={RandomBeer} />
      <Route exact path="/beers/new" component={BeerForm} />

      {/* LAS RUTAS QUE TRAIGAN PARAMETROS SIEMPRE DEBEN IR AL FINAL */}
      <Route exact path="/beers/:id" component={BeerDetail} />
    </Switch>
  </BrowserRouter>
);

export default Router;