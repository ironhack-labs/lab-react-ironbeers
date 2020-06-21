import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import Beers from './components/Beers'
import { Switch, Route } from 'react-router-dom';
import Beer from './components/Beer'
import RandomBeer from './components/RandomBeer';
import 'bootstrap/dist/css/bootstrap.css'
import NewBeer from './components/NewBeer';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/beers' component={Beers} />
        <Route path='/beers/:id' component={Beer} />
        <Route path='/random-beer' component={RandomBeer}></Route>
        <Route path='/new-beer' component={NewBeer}/>
      </Switch>

    </>
  );
}

export default App;
