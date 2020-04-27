import React, { Component } from 'react';
import './App.css';
import Homepage from './components/Homepage';
import { Route  } from "react-router-dom";
import ListBeers from './components/ListBeers';
import BeerDetail from './components/BeerDetail';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Homepage} />
        <Route exact path='/beers' component={ListBeers} />
        <Route exact path='/beers/:id' component={BeerDetail} />
        <Route exact path='/random-beer' component={RandomBeer} />
        <Route exact path='/new-beer' component={NewBeer} />
      </div>
    );
  }
}

export default App;
