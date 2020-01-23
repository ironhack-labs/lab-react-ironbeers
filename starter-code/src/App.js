import React, { Component } from 'react';
import './App.css';
import BeerList from './components/BeerList'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import BeerDisplay from './components/BeerDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/beers" component={BeerList}/>
        <Route exact path="/beers/:id" component={BeerDisplay}/>
        <Route exact path="/random-beer" component={RandomBeer}/>
        <Route exact path="/new-beer" component={NewBeer}/>
      </Switch>
      </div>
    );
  }
}

export default App;
