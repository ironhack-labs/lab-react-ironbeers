import React, { Component } from 'react';

import './App.css';

import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/homePage/HomePage';
import Beers from './pages/beers/BeersList';


class App extends Component {
  render() {
    return (
      <main className="container">
      <Switch>
          <Route path="/" exact render={() => <HomePage/>} />
          <Route path="/beers" exact render={() => <Beers/>} />
      </Switch>
      </main>
    );
  }
}

export default App;
