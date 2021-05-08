import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from './Home/Home';

import ListBeers from './ListBeers/ListBeers';

import NewBeer from './NewBeer/NewBeer';

import RandomBeer from './RandomBeer/RandomBeer';

import NotFound from './NotFound';

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/beers" component={ListBeers} />
      <Route exact path="/random-beer" component={RandomBeer} />
      <Route exact path="/new-beer" component={NewBeer} />
      <Route component={NotFound} />
    </Switch>
  );
}
