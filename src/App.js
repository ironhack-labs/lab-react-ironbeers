import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import HomePage from './pages/homePage/HomePage';
import BeersPage from './pages/beersPage/BeersPage';
import BeerDetailsPage from './pages/beerDetailsPage/BeerDetailsPage';
import RandomBeerPage from './pages/randomBeerPage/RandomBeerPage';
import NewBeerPage from './pages/newBeerPage/NewBeerPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/beers" component={BeersPage} />
        <Route exact path="/beers/:beerId" component={BeerDetailsPage} />
        <Route exact path="/random-beer" component={RandomBeerPage} />
        <Route exact path="/new-beer" component={NewBeerPage} />
      </Switch>
    </div>
  );
}

export default App;
