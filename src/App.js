import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/home-page/HomePage';
import BeerList from './components/beers-list/BeerList';
import BeerDetail from './components/beere-detail/BeerDetail';
import RandomBeer from './components/beers-random/RandomBeer';
function App() {
  return (
    <div>
      <Switch >
        <Route exact path="/" component={HomePage} />
        <Route exact path="/beers" component={BeerList} />
        <Route exact path="/beers/:beerId" component={BeerDetail} />
        <Route exact path="/random-beer" component={RandomBeer} />
      </Switch>
    </div>
  );
}

export default App;
