import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home/home';
import Beers from './beers/beers';
import { Switch, Route } from 'react-router-dom';
import SingleBeer from './single-beer/single-beer';
import NewBeer from './new-beer/new-beer';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/beers' component={Beers}/>
          <Route exact path='/random' component={SingleBeer}/>
          <Route exact path='/new-beer' component={NewBeer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
