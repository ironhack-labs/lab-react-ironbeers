import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import AllBeers from './components/AllBeers/AllBeers';
import BeersDetails from './components/BeersDetails/BeersDetails';
import HomePage from './components/HomePage/HomePage';
import Navigation from './components/Layout/Navigation/Navigation';
import RandomBeer from './components/RandomBeer/RandomBeer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() => <HomePage />} />
        <Route exact path='/beers' render={() => <AllBeers><Navigation /> </AllBeers>} />
        <Route path='/beers/:id' render={(beers) => <BeersDetails {...beers} ><Navigation /></BeersDetails>} />
        <Route path='/random-beers' render={() => <RandomBeer ><Navigation /></RandomBeer>} />
      </Switch>
    </div>
  );
}

export default App;
