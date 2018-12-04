import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage.js";
import NotFound from "./components/NotFound.js";
import AllBeers from "./components/AllBeers.js";
import AddBeer from "./components/AddBeer.js";
import RandomBeer from "./components/RandomBeer.js";
import BeerDetails from "./components/BeerDetails.js";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

      <Switch>
          <Route exact path = "/" component = {HomePage} />
          <Route path = "/all-beers" component = {AllBeers} />
          <Route path = "/random-beer" component = {RandomBeer} />
          <Route path = "/beers/:beerId" component = {BeerDetails} />
          <Route path="/add-beer" component = {AddBeer} />
          {/* 404 route LAST */}
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
