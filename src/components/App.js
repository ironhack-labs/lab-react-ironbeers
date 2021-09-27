import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Home';
import ListBeers from './Beer/ListBeers';
import RandomBeer from './Beer/RandomBeer';
import NewBeer from './Beer/NewBeer';
import SingleBeer from './Beer/SingleBeer';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/beers" component={ListBeers} />
      <Switch>
        <Route exact path="/beers/new" component={NewBeer} />
        <Route exact path="/beers/random" component={RandomBeer} />
        <Route path="/beers/:beerId" component={SingleBeer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
