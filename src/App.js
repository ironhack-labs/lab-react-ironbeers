import React from 'react';
import './App.css';
import Home from './views/Home';
import Beers from './views/Beers';
import OneBeer from './views/OneBeer';
import NewBeer from './views/NewBeer';
import RandomBeer from './views/RandomBeer';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
        <Route exact path="/beers/:id" component={OneBeer} />
      </Switch>
    </div>
  );
}

export default App;
