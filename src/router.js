import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Beers from './pages/Beers';
import Beer from './pages/Beer';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';

const router = () => (
  <Router>
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={Beers} path="/beers" exact />
      <Route component={Beer} path="/beer/:id" exact />
      <Route component={RandomBeer} path="/random" exact />
      <Route component={NewBeer} path="/new" exact />
    </Switch>
  </Router>
);

export default router;
