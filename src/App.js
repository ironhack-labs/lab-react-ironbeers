import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Beers from './pages/Beers';
import Newbeer from './pages/Newbeer';
import Randombeer from './pages/Randombeer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/beers" component={Beers} />
        <Route path="/random-beer" component={Randombeer} />
        <Route path="/new-beer" component={Newbeer} />
      </Switch>
    </div>
  );
}

export default App;
