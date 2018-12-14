import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import AllBeers from './components/beers/AllBeers';
import SingleBeer from './components/beers/SingleBeer';
import RandomBeer from './components/beers/RandomBeer';
import NewBeer from './components/beers/NewBeer';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/all' component={AllBeers}/>
    <Route path='/single/:id' component={SingleBeer}/>
    <Route path='/random' component={RandomBeer}/>
    <Route path='/new' component={NewBeer}/>
  </Switch>
)

export default Routes