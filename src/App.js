// import { useEffect, useState } from 'react';
// import { Link, Switch, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import SingleBeer from './components/SingleBeer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route
          exact
          path="/beers/"
          render={(props) => <AllBeers {...props} />}
        />
        <Route
          exact
          path="/beers/:dynamicId"
          render={(props) => <SingleBeer {...props} />}
        />
        <Route
          exact
          path="/beers/random"
          render={(props) => <RandomBeer {...props} />}
        />
        <Route
          exact
          path="/new-beer/"
          render={(props) => <NewBeer {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
