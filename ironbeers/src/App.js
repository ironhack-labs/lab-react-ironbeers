import React from 'react';
import './App.css';
import Home from './components/Home';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer'
import { Route, Switch } from 'react-router-dom';
import Beers from './components/Beers';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/beers' component={Beers}/>
      <Route exact path='/new-beer' component={NewBeer}/>
      <Route exact path='/random-beer' component={RandomBeer}/>
    </Switch>
    </div>
  );
}

export default App;
