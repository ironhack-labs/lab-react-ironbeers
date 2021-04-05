import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Home from './Home';
import Beers from './Beers';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer';
import BeerDetail from './BeerDetail';

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/beers" component={Beers} />
      <Route exact path="/random-beer">
        <Redirect to="/random/beer" />
      </Route>
      <Route exact path="/new-beer" component={NewBeer} />
      <Route
        exact
        path="/:beerId/beer"
        component={(props) => <BeerDetail {...props} />}
      />
    </Switch>
  );
};

export default AppRouter;
