import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './components/Home'
import { Link, Redirect, BrowserRouter, Route, Switch } from 'react-router-dom';
import AllBeers from './components/AllBeers';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import SingleBeer from './components/SingleBeer';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/AllBeers' component={AllBeers}/>
        <Route exact path='/NewBeer' component={NewBeer}/>
        <Route exact path='/RandomBeers' component={RandomBeer}/>
        <Route exact path='/AllBeers/:id' component={SingleBeer}/>
      </Switch>
      </div>
    );
  }
}

export default App;
