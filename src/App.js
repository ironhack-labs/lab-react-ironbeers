import React from 'react';
import Home from './views/Home';
import Beers from './views/Beers';
import OneBeer from './views/OneBeer';
import NewBeer from './views/NewBeer';
import RandomBeer from './views/RandomBeer';
import { Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route path="/beers/:id" component={OneBeer} />
        <Route path="/random-beer" component={RandomBeer} />
        <Route path="/new-beer" component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;
