import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Beers from './pages/Beers';
import Newbeer from './pages/Newbeer';
import Randombeer from './pages/Randombeer';
import OneBeer from './pages/OneBeer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route path="/random-beer" component={Randombeer} />
        <Route path="/new-beer" component={Newbeer} />
        <Route path="/beers/:id" component={OneBeer} />
      </Switch>
    </div>
  );
}

export default App;
