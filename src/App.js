import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import BeersList from './components/BeersLists';
import BeerDetail from './components/BeerDetail';

function App() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path={'/'}
          render={() => {
            return <Home />;
          }}
        />
        <Route
          exact
          path={'/beers'}
          render={() => {
            return <BeersList />;
          }}
        />
        <Route
          exact
          path={'/beers/:beerId'}
          render={(routeProps) => {
            return <BeerDetail {...routeProps} />;
          }}
        />

        <Route
          exact
          path="/random-beer"
          render={() => {
            return <RandomBeer />;
          }}
        />
        <Route
          exact
          path="/new-beer"
          render={() => {
            return <NewBeer />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
