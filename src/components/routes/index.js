import React from 'react';

import { Route, Switch } from 'react-router-dom';
import IndexPage from '../pages/Index/Index';
import BeersList from '../pages/beers/BeersList';
import BeerDetails from '../pages/beers/BeerDetails';

const Routes = () => (
  <Switch>
    <Route path="/" exact render={() => <IndexPage />}></Route>
    <Route path="/beers" exact render={() => <BeersList />}></Route>
    <Route
      path="/beers/:id"
      exact
      render={(props) => <BeerDetails {...props} />}
    />
  </Switch>
);
export default Routes;
