import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from "./components/Home";
import Beers from "./components/Beers"
import Random from "./components/Random";
import BeerDetails from "./components/BeerDetails";
import NewBeer from './components/NewBeer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/beers' component={Beers} />
          <Route exact path='/random-beers' component={Random} />
          <Route exact path='/beers/:id' component={BeerDetails} />
          <Route exact path='/random-beer' component={Random} />
          <Route exact path='/new-beer' component={NewBeer}/>
          </Switch>
      </div>
    );
  }
}

export default App;