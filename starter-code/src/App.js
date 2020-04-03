import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import AllBeers from './pages/AllBeers'
import BeerInfo from './pages/BeerInfo'
import NewBeer from './pages/NewBeer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/all' component={AllBeers}/>
          <Route path='/beer/:id' component={BeerInfo}/>
          <Route path='/new' component={NewBeer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
