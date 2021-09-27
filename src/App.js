import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AllBeersPage from './pages/AllBeersPage';
import BeerDetailsPage from './pages/BeerDetailsPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/allBeers" component={AllBeersPage} />
      <Route path="/beerDetails/:id" component={BeerDetailsPage} />
    </Switch>
  );
}

export default App;
