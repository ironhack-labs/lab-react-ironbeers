import React from 'react';
import Home from './views/Home';
import Beers from './views/Beers';
import OneBeer from './views/OneBeer';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/beers/:toto" component={OneBeer} />
      </Switch>
    </div>
  );
}

export default App;
