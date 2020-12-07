import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Beers from './Beers';
import BeerDetails from './BeerDetails';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer';

function Navegation(props) {
  return (
    <>
      <Route path={props.match.url} component={Header} />
      <Switch>
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/beers/:id" component={BeerDetails} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
      </Switch>
    </>
  );
}

export default Navegation;
