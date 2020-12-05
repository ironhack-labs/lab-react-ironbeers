import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import Beers from './Beers';
import BeerDetails from './BeerDetails';
import RandomBeer from './RandomBeer';

function Navegation(props) {
  return (
    <>
      <Route path={props.match.url} component={Header} />
      <Route exact path="/beers" component={Beers} />
      <Route exact path="/beers/:id" component={BeerDetails} />
      <Route exact path="/random-beer" component={RandomBeer} />
    </>
  );
}

export default Navegation;
