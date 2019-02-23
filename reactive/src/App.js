import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import beerDetail from './components/BeerDetail';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/all' component={Beers}/>
          <Route path='/random' component={RandomBeer}/>
          <Route path='/new' component={NewBeer}/>
          <Route path='/beers/:beerId' component={beerDetail}/>
        </Switch>
      </div>
    );
  }
}

export default App;
