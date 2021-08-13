import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AllBeers from './Components/AllBeers';
import RandomBeer from './Components/RandomBeer';
import NewBeer from './Components/NewBeer';
import OneBeer from './Components/OneBeer';

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route exact path="/beers" component={AllBeers} />

          <Route exact path="/beers/:beerId" component={OneBeer} />

          <Route exact path="/random" component={RandomBeer} />

          <Route exact path="/create" component={NewBeer} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
