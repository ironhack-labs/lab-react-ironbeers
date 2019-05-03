import React, { Component } from 'react';
import './App.css';
import Home from './Home'
import NewBeer from './NewBeer';
import RandomBeer from './RandomBeer'
import AllBeers from './AllBeers'
import { Switch, Route, Link } from "react-router-dom";
import BeerId from './BeerId';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/allbeers' component={AllBeers}/>
          <Route exact path='/randomBeer' component={RandomBeer}/>
          <Route exact path='/newBeer' component={NewBeer}/>
          <Route exact path='/allbeers/:id' component={BeerId}/>
        </Switch>
      </div>
    );
  }
}

export default App;