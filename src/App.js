import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import AllBeers from './AllBeers';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer';
import EachBeer from './EachBeer';

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path = '/' render = { () => <Home />}/>
          <Route exact path = '/All-beers' render = { () => <AllBeers />}/>
          <Route exact path = '/Random-beer' render = { () => <RandomBeer />}/>
          <Route exact path = '/New-beer' render = { () => <NewBeer />} />
          <Route exact path = '/beers/:id'  render = { (props) => <EachBeer {...props} />}/>
        </Switch>
      </div>
    );
  }
}

export default App;
