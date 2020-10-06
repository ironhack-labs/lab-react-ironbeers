import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom"; 
import Home from './components/Home'
import BeersList from './components/BeersList';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer'



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={BeersList} />
        <Route exact path="/beers/:id" component={BeerDetails} />
        <Route exact path="/random" component={RandomBeer} />
        <Route exact path="/new" component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;