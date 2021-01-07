import React from 'react';
// import logo from './logo.svg';
import Home from './views/Home';
import AllBeers from './views/AllBeers';
import RandomBeer from './views/RandomBeer';
import NewBeer from './views/NewBeer';
import Beer from './views/Beer';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={AllBeers} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
        <Route exact path="/beers/:id" component={Beer} />
      </Switch>
    </div>
  );
}

export default App;
