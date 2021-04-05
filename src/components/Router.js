import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './Home';
import Beers from './Beers';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer';

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/beers" component={Beers} />
      <Route exact path="/random-beer" component={RandomBeer} />
      <Route exact path="/new-beer" component={NewBeer} />
    </Switch>
  );
};

export default AppRouter;
