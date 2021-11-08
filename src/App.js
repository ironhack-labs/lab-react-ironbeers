import React from 'react';
import './App.css';
import Home from './components/Home';
import { Route, Switch } from 'react-router';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
