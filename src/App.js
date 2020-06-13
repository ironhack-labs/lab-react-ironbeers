import React from 'react';
import './App.css';

import HomePage from './components/HomePage';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import BeerDetail from './components/BeerDetail';


import { Switch, Route } from 'react-router-dom'




function App() {
  return (
    <div>

<Switch>
<Route exact path='/' component={HomePage}/>
<Route exact path='/beers' component={Beers}/>
<Route exact path='/random-beer' component={RandomBeer}/>
<Route exact path='/new-beer' component={NewBeer}/>
<Route exact path='/beers/:_id' component={BeerDetail}/>





</Switch>
    </div>
  );
}

export default App;
