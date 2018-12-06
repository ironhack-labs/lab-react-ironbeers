import React, { Component } from 'react';
import './App.css';
import Home from './component/Home/Home';
import beers from './component/beers/beers';
import newBeer from './component/newBeer/newBeer';
import randomBeer from './component/randomBeer/randomBeer';
import singleBeer from './component/singleBeer/singleBeer';
import {Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div id="root">

       <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/beers" component={beers}/>
            <Route exact path="/randomBeer" component={randomBeer}/>
            <Route exact path="/newBeer" component={newBeer}/>
            <Route exact path="/beers/:beerId" component={singleBeer}/>
        </Switch>

      </div>
    );
  }
}

export default App;
