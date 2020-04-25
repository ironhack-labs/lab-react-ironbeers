import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeer';
import HomePage from './pages/HomePage';
import NewBeer from './pages/NewBeer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/beers' component={Beers}/>
          <Route path='/random-beer' component={RandomBeer}/>
          <Route path='/new-beer' component={NewBeer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
