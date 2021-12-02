import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Beers from './Components/Beers/Beers';
import BeersDetails from './Components/BeersDetails/BeersDetails';
import CreateBeers from './Components/CreateBeers/CreateBeers';
import HomePage from './Components/HomePage/HomePage';
import NavBar from './Components/NavBar/NavBar';
import RandomBeer from './Components/RandomBeer/RandomBeer';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact render={(props) => <HomePage {...props} />} />
        <Route
          path="/beers"
          exact
          render={(props) => (
            <div>
              <NavBar {...props} /> <Beers {...props} />
            </div>
          )}
        />
        <Route
          path="/beers/random"
          render={(props) => (
            <div>
              <NavBar {...props} /> <RandomBeer {...props} />
            </div>
          )}
        />
        <Route
          path="/beers/:id"
          render={(props) => (
            <div>
              <NavBar {...props} /> <BeersDetails {...props} />
            </div>
          )}
        />
        <Route
          path="/new-beer"
          render={(props) => (
            <div>
              <NavBar {...props} /> <CreateBeers {...props} />
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
