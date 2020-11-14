import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import Beers from './pages/Beers/Beers';
import RandomBeer from './pages/RandomBeerPage/RandomBeerPage';
import NewBeer from './pages/NewBeer/NewBeer';
import BeerDetail from './pages/BeerDetailPage/BeerDetailPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/beers/:id" component={BeerDetail} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;
