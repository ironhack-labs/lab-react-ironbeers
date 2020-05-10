import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Beers from "./pages/Beers";
import BeerDetails from "./pages/BeerDetails";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <NavMain /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/beers/random" component={RandomBeer} />
        <Route exact path="/beers/new" component={NewBeer} />
        <Route exact path="/beers/:beerid" component={BeerDetails} />
        
      </Switch>
    </div>
    );
  }
}

export default App;
