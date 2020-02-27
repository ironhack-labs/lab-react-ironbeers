import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import BeersList from './components/BeersList'
import BeerDetails from './components/BeerDetails'
import RandomBeer from './components/RandomBeer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/beers/:id" render={match => <BeerDetails {...match} />} />
          <Route path="/beers" render={() => <BeersList />} />

          <Route path="/random-beer" render={match => <RandomBeer {...match} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
