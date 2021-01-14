import React from 'react';
import logo from './logo.svg';
import './App.css';

import Homepage from './Component/Homepage.js';
import Beers from './Component/Beers.js';
import SingleBeer from './Component/SingleBeer.js';
import Random_Beer from './Component/Random_Beer';
import New_Beer from './Component/New_Beer';

import { Switch, Route } from 'react-router-dom';

function App() {
  return(
  <div className='App'>
  <Switch>
    <Route exact path='/' component={Homepage} />
    <Route exact path='/beers' component={Beers} />
    <Route path='/beers/:id' component={SingleBeer} />
    <Route path='/random-beer' component={Random_Beer} />
    <Route path='/new-beer' component={New_Beer} />
  </Switch>
</div>
);
}
export default App;