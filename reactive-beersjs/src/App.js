import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.js";
import HomePage from "./components/HomePage.js";
import AllBeers from "./components/AllBeers.js";
import BeerDetails from "./components/BeerDetails.js";
import RandomBeer from "./components/RandomBeer.js";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/beers" component={AllBeers} />#
          <Route exact path="/beers/random" component={RandomBeer} />
          <Route exact path="/beers/:id" component={BeerDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
