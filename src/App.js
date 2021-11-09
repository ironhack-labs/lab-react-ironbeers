import React, { Component } from 'react';
import './App.css';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Header from './components/Header';
import Home from './components/Home'

function App() {
  return (
    <div className="App">

      <Beers/>
      <NewBeer/>
      <RandomBeer/>
    </div>
  )
}

export default App;
