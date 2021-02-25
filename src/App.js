import React from 'react';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import BeersList from './components/BeersList';
import SingleBeer from './components/SingleBeer';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
           <Header />
     <BrowserRouter>
      <Route exact path='/' component={HomePage} />
      <Route path='/beers' component={BeersList} />
      <Route exact path='/beers/:beerId' component={SingleBeer} />
      <Route exact path='/random-beer' component={RandomBeer} />
      <Route exact path='/new-beer' component={NewBeer} />
     </BrowserRouter>
    </div>
  );
}

export default App;