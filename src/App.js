import React from 'react';
import './App.css';
import Homepage from './views/Homepage';
import NewBeer from './views/NewBeer';
import BeersList from './views/BeersList';
import SingleBeer from './views/SingleBeer';
import RandomBeer from './views/RandomBeer';
import { Switch, Route } from 'react-router';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/random-beer" component={RandomBeer} />
      <Route exact path="/new-beer" component={NewBeer} />
      <Route exact path="/beers/:id" component={SingleBeer} />
      <Route exact path="/beers" component={BeersList} />
      <Route exact path="/" component={Homepage} />
    </Switch>
  </div>
  );
}

export default App;
