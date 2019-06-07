import React from 'react';
import './App.css';
import HomePage from './components/HomePage'
import { Switch, Route } from 'react-router-dom'
import AllTheBeer from './components/AllTheBeer'
import BeerDetails from './components/BeerDetails'

function App() {
  return (
    <div className="App">
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/beers" exact component={AllTheBeer} />
      <Route path="/beers:id" exact component={BeerDetails} />
    </Switch>
    </div>
  );
}

export default App;

