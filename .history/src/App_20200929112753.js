import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import ListBeers from './components/ListBeers';
import SingleBeer from './components/SingleBeer';
// import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={ListBeers} />
          <Route exact path="/beers/:id" component={SingleBeer} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
