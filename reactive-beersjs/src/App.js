import React, { Component } from 'react';
import './App.css';

import Card from './components/card/Card.js';
import AllBeers from './components/all-beers/AllBeers.js';
import SingleBeer from './components/single-beer/SingleBeer.js';
import FormBeer from './components/form-beer/FormBeer.js';


import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Card} />
          <Route exact path='/beers' component={AllBeers} />
          <Route exact path='/single-beer/:id' component={SingleBeer} />
          <Route exact path='/random-beer/:id' component={SingleBeer} />
          <Route exact path='/new-beer' component={FormBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
