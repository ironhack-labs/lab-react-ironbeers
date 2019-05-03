import React from 'react';
import './App.css';
import Home from '../components/Home.js'
import AllBeers from '../components/AllBeers.js';
import RandomBeers from '../components/RandomBeers.js'
import NewBeer from '../components/NewBeer.js'
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Home />
      <Switch>
      <Route exact path='/beers' component={AllBeers}/>
      <Route exact path='/random-beer' component={RandomBeers}/>
      <Route exact path='/new-beer' component={NewBeer}/>
      </Switch>
    </div>
  );
}

export default App;
