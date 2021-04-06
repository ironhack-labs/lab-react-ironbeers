import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from './Home'
import ListBeers from './ListBeers'

export default function Routerr() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/list-beers" children={<ListBeers />} />
      {/* <Route exact path="/list-beers" component={ListBeers} /> */}
      {/* <Route path="/:id" component={<x />} /> */}
      {/* <Route exact path="/" children={<x />} /> */}
    </Switch>
  );
}