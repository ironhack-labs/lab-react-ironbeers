import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Beers from './pages/Beers';
import BeersDetail from './pages/BeersDetail';

import RandomBeer from './pages/RandomBeer';
 import NewBeer from './pages/NewBeer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
          <Route exact path="/beer/:id" component={BeersDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
