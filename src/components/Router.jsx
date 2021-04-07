import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from './Home'
import ListBeers from './ListBeers'
import SingleBeer from './SingleBeer'
import RandomBeer from './RandomBeer'

export default function Routerr() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/list-beers" children={<ListBeers />} />      
      <Route path="/random-beer" component={SingleBeer} />
      <Route path="/beer/:id" component={SingleBeer} />
      {/* <Route exact path="/list-beers" component={ListBeers} /> */}
      {/* <Route exact path="/" children={<x />} /> */}
    </Switch>
  );
}