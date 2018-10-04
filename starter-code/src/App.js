import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import ListBeers from './components/ListBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import {Route} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route exact path="/beers" component={ListBeers}/>
        <Route exact path="/random-beer" component={RandomBeer}/>
        <Route exact path="/new-beer" component={NewBeer}/>
      </div>
    );
  }
}

export default App;
