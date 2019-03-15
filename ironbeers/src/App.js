import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import AllBeers from "./components/AllBeers";
import BeerDetail from "./components/BeerDetail";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/beers" component={AllBeers} />
          <Route exact path="/beers/:id" component={BeerDetail} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
