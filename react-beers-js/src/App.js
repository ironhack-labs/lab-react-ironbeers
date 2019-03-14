import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import 'bulma/css/bulma.css' 
import './App.css';

import HomePage from './components/HomePage.js';
import AllBeers from './components/AllBeers.js';
import BeerDetails from './components/BeerDetails.js';
import RandomBeer from './components/RandomBeer.js';
import NewBeer from './components/NewBeer.js';

class App extends Component {
  render() {
    return (
      <div className="App">        
          
          <Switch>

            <Route exact path="/" component={HomePage} />
            <Route exact path="/beers" component={AllBeers} />
            <Route exact path="/beers/:id" component={BeerDetails} />
            <Route exact path="/random-beer" component={RandomBeer} />
            <Route exact path="/new-beer" component={NewBeer} />
            
          </Switch>

      </div>
    );
  }
}

export default App;