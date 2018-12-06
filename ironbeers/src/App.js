import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage.jsx";
import BeersPage from "./Components/BeersPage/BeersPage.jsx";
import NewBeerPage from "./Components/NewBeerPage/NewBeerPage.jsx";
import BeerRandomPage from "./Components/BeerRandomPage/BeerRandomPage.jsx";
import BeerId from "./Components/BeerId/BeerId.jsx"

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/beers" component={BeersPage} />
          <Route path="/beers/new" component={NewBeerPage} />
          <Route path="/beers/random" component={BeerRandomPage} />
          <Route path="/beers/:_id" component={BeerId} />
        </Switch>
      </div>
    );
  }
}
