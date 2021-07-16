import React from 'react';
import './App.css';
import Home from "./components/Home";
import Beers from "./components/Beers";
import BeerDetail from "./components/SingleBeer";
import RandomBeer from './components/RandomBeer';

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route path="/beers/:id" component={BeerDetail} />
        <Route path="/random-beer" component={RandomBeer} />
      </Switch>
    </div>
  );
}

export default App;
