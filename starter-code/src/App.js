import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import beers from './components/beers';
import randomBeer from './components/randomBeer';
import newBeer from './components/newBeer';
import home from './components/home';
import singleBeer from './components/singleBeer';
import {Switch, Route} from 'react-router-dom';
import axios from 'axios';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Switch> 
            <Route exact path='/' component={home}/>
            <Route exact path='/beers' component={beers}/>
            <Route exact path='/random-beer' component={randomBeer}/>
            <Route exact path='/new-beer' component={newBeer}/>
            <Route exact path='/beers/:beerId' component={singleBeer}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
