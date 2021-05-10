import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import NoMatch from '../NoMatch';
import Beers from './Beers';
import Beer from './Beer';
import NewBeer from './NewBeer';

export default function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/beers">
          <Beers />
        </Route>
        <Route exact path="/beers/:beerId" component={Beer} />
        <Route exact path="/random-beer">
          <Beer random="random" />
        </Route>
        <Route exact path="/new-beer">
          <NewBeer foo="bar" />
        </Route>

        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}

/*
        <Route exact path="/random-beer">
          <Beer foo="bar" />
        </Route>
        <Route exact path="/random-beer" component={Beer} />
*/
