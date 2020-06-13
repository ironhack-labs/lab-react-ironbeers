import React from 'react';
import './App.css';
import { Switch, Route, Link, Redirect, Router } from 'react-router-dom';
import Home from './components/Home';
import AllBeers from './components/AllBeers'
import BeerDetails from './components/BeerDetails'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={AllBeers} />
        <Route exact path="/new-beer" component={NewBeer} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/:id" component={BeerDetails} />
        
        </Switch>
    </div>
  );
}

export default App;
