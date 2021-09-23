import React from 'react';
import './App.css';
import HomePage from './components/Pages/HomePage/HomePage';
import Beers from './components/Pages/Beers/Beers'
import RandomBeer from './components/Pages/RandomBeer/RandomBeer';
import NewBeer from './components/Pages/NewBeer/NewBeer';
import Switch from 'react-bootstrap/esm/Switch';
import { Route } from 'react-router';
import BeerDetails from './components/Pages/BeerDetails/BeerDetails';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/beers" render={(props) => <Beers {...props} />} />
        <Route
          path="/random-beer"
          render={(props) => <RandomBeer {...props} />}
        />
        <Route
          path="/beer/:id"
          render={(props) => <BeerDetails {...props} />}
        />
        <Route path="/new-beer" render={(props) => <NewBeer {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
