import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import Beers from "./Components/Beers/Beers.js"
import RandomBeer from "./Components/RandomBeer/RandomBeer.js"
import NewBeer from "./Components/NewBeer/NewBeer.js"

import Homepage from "./Components/homepage/homepage.js"
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Homepage></Homepage>
          </Route>
          <Route exact path='/beers'>
            <Beers></Beers>
          </Route>
          <Route exact path='/random-beers'>
            <RandomBeer></RandomBeer>
          </Route>
          <Route exact path='/new-beers'>
            <NewBeer></NewBeer>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
