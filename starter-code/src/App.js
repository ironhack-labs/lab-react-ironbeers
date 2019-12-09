import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Beers } from './components/beers';
import { RandomBeer } from './components/randombeer';
import { NewBeer } from './components/newbeer';
import { Home } from './components/home';
import { SingleBeer } from './components/singlebeer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/beers/:id" component={SingleBeer} />
          <Route path="/beers" component={Beers} />
          <Route path="/random-beer" component={RandomBeer} />
          <Route path="/new-beer" component={NewBeer} />
          <Route path="/" component={Home} />
        </Switch>
        <div className="App"></div>
      </BrowserRouter>
    );
  }
}

export default App;
