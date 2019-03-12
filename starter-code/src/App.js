import React, { Component } from 'react';
import './App.css';
//import axios from 'axios';
import {Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import BeerDetails from './components/BeerDetails';
import NewBeer from './components/NewBeer';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        < Home />
      
          <Switch>
              <Route exact path='/all' component={AllBeers} />
              <Route exact path='/random' component={RandomBeer} />
              <Route path='/single/:id' component={BeerDetails}></Route>
              <Route exact path='/new-beer' component={NewBeer}/>
          </Switch>
      
          
      </div>
    );
  }
}

export default App;
