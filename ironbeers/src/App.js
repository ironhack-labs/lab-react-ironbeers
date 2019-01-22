import React, { Component } from 'react';
import './App.css';
import { Route } from "react-router-dom";
import HomePage from "./components/HomePage.js";
import Beers from "./components/Beers.js";
import NewBeer from "./components/NewBeer.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/new-beer" component={NewBeer} />
      </div>
    );
  }
}

export default App;
