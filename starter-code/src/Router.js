import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import BeersAll from './components/beers/BeersView';
import NewBeer from './components/beers/NewBeer';


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/beers" component={BeersAll} />
      <Route exact path="/newbeer" component={NewBeer} />
    </Switch>
  </BrowserRouter>
);

export default Router;