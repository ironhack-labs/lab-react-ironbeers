import React from 'react';
import './App.css';
import HomePage from "./pages/HomePage";
import Beers from "./pages/Beers";
import BeerDetails from "./pages/BeerDetails";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} /> 
        <Route exact path="/new-beer" component={NewBeer} />
        <Route exact path="/beers/:id" component={BeerDetails} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/beers" component={Beers} />
      </Switch>
    </div>
  );
}

export default App;
