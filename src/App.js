import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Routes/Home.js';
import AllBeers from './Routes/AllBeers.js';
import RandomBeer from './Routes/RandomBeer.js';
import NewBeer from './Routes/NewBeer.js';
import BeerDetail from './Routes/BeerDetail.js';
import 'bulma/css/bulma.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/allbeers' component={AllBeers} />
          <Route exact path='/randombeer' component={RandomBeer} />
          <Route exact path='/newbeer' component={NewBeer} />
          <Route path='/beer/:id' component={BeerDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
