import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './components/Home/Home';
import Beers from './components/Beers/Beers';
import RandomBeer from './components/RandomBeer/RandomBeer';
import NewBeer from './components/NewBeer/NewBeer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/beers" component={Beers} />
        <Route path="/beers/:id" component={Beers} />
        <Route path="/random-beer" component={RandomBeer} />
        <Route path="/new-beer" component={NewBeer} />
        <Route component={Home} />
      </Switch>
    </div>
  );
}

export default App;
