import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Beer from './components/Beer';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import BeerDetails from './components/BeerDetails';




class App extends Component {
   
  render() {
    
   
    return (
      <div className="App">
      <BrowserRouter>
      <Switch>
      <Route exact path= '/' component={Home}/>
      <Route exact path='/beers' component={Beer}/>
      <Route exact path='/random-beer' component={RandomBeer}/>
      <Route exact path='/new-beer' component={NewBeer}/>
      <Route exact path='/beers/:id' component={BeerDetails}/>
      </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
