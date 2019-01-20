import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router';
import { Newbeer } from './pages/Newbeer';
import { HomePage } from './pages/HomePage';
import { DrawBeers } from './pages/Beers';
import { GetOne } from './pages/GetOne';
import Randombeer from './pages/Randombeer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
            <Route exact  path="/" component={HomePage}/>
            <Route exact  path="/new" component={Newbeer}/>
            <Route exact  path="/randombeer" component={Randombeer}/>
            <Route exact  path="/beers" component={DrawBeers}/>
            <Route exact  path="/beers/:id" component={GetOne}/>
          </Switch>
      </div>
    );
  }
}

export default App;
