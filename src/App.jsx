import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import RandomBeer from './views/RandomBeer';
import NewBeer from './views/NewBeer';
import AllBeers from './views/AllBeers';
import SingleBeer from './views/SingleBeer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/random-beer" component={RandomBeer} exact />
          <Route path="/new-beer" component={NewBeer} exact />
          <Route path="/beers" component={AllBeers} exact />
          <Route path="/beers/:id" component={SingleBeer} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
