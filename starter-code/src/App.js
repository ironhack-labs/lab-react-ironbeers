import React, { Component, Fragment } from 'react';
import './App.css';
import Beers from './components/Beers';
import RandomBeers from './components/RandomBeers';
import NewBeers from './components/NewBeers';
import HomePage from './components/HomePage';
import SingleBeer from './components/SingleBeer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
    <Fragment>
      <Router>
        
         <Route exact path='/' component={HomePage} />
         <Route exact path='/beers' component={Beers} />
         <Route exact path='/:id' component={SingleBeer} />
         <Route exact path='/random-beer' component={RandomBeers} />
         <Route exact path='/new-beer' component={NewBeers} />
      </Router>
    </Fragment>
    );
  }
}

export default App;
