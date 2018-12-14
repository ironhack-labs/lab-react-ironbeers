import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import RandomBeer from './components/beers/RandomBeer';
import AllBeers from './components/beers/AllBeers';
import CreateBeer from './components/beers/CreateBeer';

function Routes() {
  return (<Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/beers" component={AllBeers}/>
      <Route path="/random-beer" component={RandomBeer}/>
      <Route path="/new-beer" component={CreateBeer}/>
  </Switch>)
}

export default Routes