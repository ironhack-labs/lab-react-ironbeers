import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AllBeers from './components/AllBeers';
import Random from './components/Random';
import NewBeer from './components/NewBeer';


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
