import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import { Switch, Route } from 'react-router-dom';

// Components 
import Home from './components/Home';
import AllBeers from './components/AllBeers'
import BeerDetails from './components/BeerDetails'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'


export default function App() {
  return (
    <div className="App">
      <h1>IronBeer</h1>
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