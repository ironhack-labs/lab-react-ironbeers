import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import Beers from './components/Beers';
import BeerDetail from "./components/BeerDetail"
import NewBeer from './components/NewBeer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/all-beers" component={Beers} />
          <Route exact path="/beers/:id" component={BeerDetail} />
          <Route exact path="/beers/:random" component={BeerDetail} />
          <Route exact path="/new" component={NewBeer} />

        </Switch>
      </div>
    );
  }
}

export default App;
