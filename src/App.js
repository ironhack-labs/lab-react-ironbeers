import React from 'react';
import Home from './Views/Home';
import Beers from './Views/Beers';
import OneBeer from './Views/OneBeer';
import RandomBeer from './Views/RandomBeer';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/beers/:toto" component={OneBeer} />
        <Route exact path="/random-beer" component={RandomBeer} />
      </Switch>
    </div>
  );
}

export default App;
