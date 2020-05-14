import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom'
import Home from './components/Home'
import Beers from './components/Beers'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'
import SingleBeer from './components/SingleBeer'

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Home />
      </Route>
      <Switch>
        <Route path="/beers">
          <Beers />
        </Route>
        <Route path="/random-beer">
          <RandomBeer />
        </Route>
        <Route path="/new-beer">
          <NewBeer />
        </Route>
        <Route exact path="/:beerId" component={SingleBeer} />
      </Switch>
    </div>
  );
}

export default App;
