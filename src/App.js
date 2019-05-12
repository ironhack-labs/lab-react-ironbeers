import React from 'react';
import { Route } from 'react-router';

import Home from './components/Home/';
import Header from './components/Header';
import BeerList from './components/BeerList/';
import BeerDetails from './components/BeerDetails';
import NewBeer from './components/NewBeer';

import './App.css';

function App() {
  return (
    <div>
      {/* This route only executes when path=/ */}
      <Route exact path="/" component={Home} />

      {/* This route executes for every starting path= */}
      <Route path="/(beers|random-beer|new-beer)" component={Header} />

      {/* This route only executes when path=/beers */}
      <Route exact path="/beers" component={BeerList} />

      {/* This route only executes when path=/beers/id */}
      <Route path="/beers/:id" component={BeerDetails} />

      {/* This route only executes when path=/random-beer */}
      <Route path="/random-beer" component={BeerDetails} />

      {/* This route only executes when path=/new-beer */}
      <Route path="/new-beer" component={NewBeer} />
    </div>
  );
}

export default App;
