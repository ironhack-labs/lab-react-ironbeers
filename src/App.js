import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AllBeers from './components/AllBeers/AllBeers';
import BeerDetail from './components/BeerDetail/BeerDetail';
import RandomBeer from './components/RandomBeer/RandomBeer';

function App() {
  return (
    <div className="App">
       <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/beers" render={() => <AllBeers />} />
        <Route path="/beers/:id" render={(props) => <BeerDetail {...props} />} />
        <Route path="/random-beers" render={() => <RandomBeer />} />
      </Switch>
    </div>
  );
}

export default App;
