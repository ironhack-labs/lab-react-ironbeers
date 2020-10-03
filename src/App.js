import React, { Component } from 'react';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import AllBeers from './components/AllBeers/AllBeers';
import SingleBeer from './components/SingleBeer/SingleBeer';
import NewBeer from './components/NewBeer/NewBeer';

export default class App extends Component {
  state = {
    beersList: [],
  };
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/beers" component={AllBeers} />
            <Route path="/random-beer" component={SingleBeer} />
            <Route path="/new-beer" component={NewBeer} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
