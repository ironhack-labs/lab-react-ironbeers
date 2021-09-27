import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import Beers from './components/Beers';
import Home from './components/Home';
import AddBeer from './components/AddBeer';
import BeerDetails from './components/BeerDetails';
import Nav from './components/Nav';

function App(props) {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/beers' component={Beers} />
        <Route exact path='/beers/:id' component={BeerDetails} />
        <Route exact path='/beers/new' component={AddBeer} />
      </Switch>
    </div>
  );
}

export default App;
