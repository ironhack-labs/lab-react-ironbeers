import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './views/Home'
import Beers from './views/Beers';
import RandomBeers from './views/RandomBeers';
import NewBeer from './views/NewBeer';
import NotFound from './views/NotFound';
import NavBar from './components/NavBar';
import OneBeer from './views/OneBeer';

import { Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/random-beers" component={RandomBeers} />
          <Route exact path="/new-beer" component={NewBeer} />
          <Route exact path="/beer/:id" component={OneBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
