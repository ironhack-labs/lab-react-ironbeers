import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home'
import Beers from './Components/Beers/Beers';
import RandomBeer from './Components/RandomBeer/RandomBeer';
import NewBeer from './Components/NewBeer/NewBeer';
import BeerDetail from './Components/Beers/BeerDetail';


const Router = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/beers/:id' component={BeerDetail} />
    <Route path='/beers' component={Beers} />
    <Route path='/random-beer' component={RandomBeer} />
    <Route path='/new-beer' component={NewBeer} />
  </Switch>
)

export default Router;