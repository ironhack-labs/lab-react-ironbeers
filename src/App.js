import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Home, Beers, BeerDetail } from './pages'
import 'antd/dist/antd.css';
import NewBeer from './pages/new-beer/NewBeer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={props => <Home {...props} />}
        />
        <Route
          exact
          path="/beers"
          render={props => <Beers {...props} />}
        />
        <Route
          exact
          path="/beers/:id"
          render={props => <BeerDetail {...props} />}
        />
        <Route
          exact
          path="/random-beer"
          render={props => <BeerDetail isRandom {...props} />}
        />
        <Route
          exact
          path="/new-beer"
          render={props => <NewBeer {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
