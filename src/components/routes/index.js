import React from 'react';

import { Route, Switch } from 'react-router-dom';
import IndexPage from '../pages/Index/Index';
import BeersList from '../pages/beers/BeersList';
import BeerDetails from '../pages/beers/BeerDetails';
import RandomBeer from '../pages/beers/RandomBeer';

const Routes = () => (
  <Switch>
    <Route path="/" exact render={() => <IndexPage />}></Route>
    <Route path="/beers" render={() => <BeersList />}></Route>
    <Route
      path="/beers/:id"
      exact
      render={(props) => <BeerDetails {...props} />}
    />
    <Route path="/random-beer" render={() => <RandomBeer />}></Route>
  </Switch>
);
export default Routes;
