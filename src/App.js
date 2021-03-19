import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Views/Home';
import AllBeers from './Views/AllBeers';
import RandomBeer from './Views/RandomBeer';
import NewBeer from './Views/NewBeer';
import BeerDetails from './Views/BeerDetails'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={AllBeers} />
        <Route exact path="/beers/:_id" component={BeerDetails} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;
