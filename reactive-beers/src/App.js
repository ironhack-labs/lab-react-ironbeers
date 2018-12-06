import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import Beers from "./Components/Beers/getBeer.js"
import RandomBeer from "./Components/RandomBeer/getRandomBeer.js"
import NewBeer from "./Components/NewBeer/NewBeer.js"
import EachBeer from "./Components/EachBeer/getEachBeer.js"


import Homepage from "./Components/homepage/homepage.js"
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/beers' component={Beers} />
          <Route exact path='/beers/:id' component={EachBeer} />
          <Route exact path='/random-beers' component={RandomBeer} />
          <Route exact path='/new-beers' component={NewBeer}>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
