import React from 'react';
// 'import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import allBeers from './components/allBeers';
import beerDetail from './components/beerDetail';

import randomBeer from './components/randomBeer';
import newBeer from './components/newBeer';


function App() {
  return (
    <div className="App">
      <NavBar />    
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={allBeers} />
          <Route exact path="/beers/:id" component={beerDetail} />
          <Route exact path="/random-beer" component={randomBeer} />
          <Route exact path="/new-beer" component={newBeer} />     
    </div>
  );
}

export default App;
