import React, { Component } from 'react';
import HomePage from './components/HomePage'
import Beers from "./components/Beers";
import Random from "./components/Random";
import New from "./components/New";
import BeerDetails from './components/BeerDetails'
import './App.css';
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Beers" component={Beers} />
          <Route path="/Random" component={Random} />
          <Route path="/New" component={New} />
          <Route path="/Beers/:id" component={BeerDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
