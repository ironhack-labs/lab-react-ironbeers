import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import AllBeers from './components/AllBeers/AllBeers';
import Random from './components/Random/Random';
import NewBeer from './components/NewBeer/NewBeer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/beers">
          <AllBeers />
        </Route>
        <Route path="/random-beer">
          <Random />
        </Route>
        <Route exact path="/:new-beer">
          <NewBeer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
