import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import Beers from './components/Beers';
import Home from './components/Home';
import BeerDetails from './components/BeerDetails';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path='/' render={() => <Home />} />
      <Route exact path='/beers' component={Beers} />
      <Route exact path='/beers/:id' component={BeerDetails} />
    </div>
  );
}

export default App;
