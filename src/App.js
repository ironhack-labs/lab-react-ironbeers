import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./views/Home";
import ListBeers from "./views/ListBeers";
import NewBeer from "./views/NewBeer";
import SingleBeer from "./views/SingleBeer";
import RandomBeer from "./views/RandomBeer";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/randombeers" component={RandomBeer} />
        <Route exact path="/listbeers" component={ListBeers} />
        <Route exact path="/beers/:id" component={SingleBeer} />
      </Switch>
    </div>
  );
}

export default App;
