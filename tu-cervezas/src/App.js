import React, { Component } from 'react';
import BeerList from './components/BeerList';
import Navbar from './components/Navbar';
import Home from './components/Home'
import { Switch, Route } from 'react-router-dom';
import './App.css';
import BeerDetails from './components/BeerDetails';
import SubmitBeer from './components/SubmitBeer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/beers' component={BeerList}/>
          <Route exact path='/beer/:id' component={BeerDetails}/>
          <Route exact path='/random-beer' component={BeerDetails}/>
          <Route exact path='/new-beer' component={SubmitBeer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
