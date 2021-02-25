import React from 'react';

import { Route, Switch } from 'react-router-dom';
import IndexPage from '../pages/Index/Index';
import BeersList from '../pages/beers/BeersList';

const Routes = () => (
  <Switch>
    <Route path="/" exact render={() => <IndexPage />}></Route>
    <Route path="/beers" exact render={() => <BeersList />}></Route>
  </Switch>
);
export default Routes;
