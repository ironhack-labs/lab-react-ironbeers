import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './views/HomePage';
import Beers from './views/Beers';
import RandomBeer from './views/RandomBeer';
import NewBeer from './views/NewBeer';
import SingleBeer from './views/SingleBeer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/beers/new" component={NewBeer} />
        <Route path="/beers/random" component={RandomBeer} />
        <Route path="/beers/:beerId" component={SingleBeer} />
        <Route exact path="/beers" component={Beers} />
      </Switch>
    </div>
  );
}

export default App;
