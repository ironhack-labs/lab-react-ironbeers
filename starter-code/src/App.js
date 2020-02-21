import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Link } from 'react-router-dom';


// Components
import Navigation from './components/Navigation';
// Pages

import home from './pages/home';
import listBeers from './pages/listBeers';
import singleBeer from './pages/singleBeer';
import newBeer from './pages/newBeer';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navigation />
        <Switch>
          <Route exact path='/' component={home} />
          <Route exact path='/beers' component={listBeers} />
          <Route path='/beers/:id' component={singleBeer} />
          <Route path='/new' component={newBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
