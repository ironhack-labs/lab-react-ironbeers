import React from 'react';
import './App.css';

import Home from './pages/home/Home';
import Beers from './pages/beers/Beers';
//import Search from './pages/';
import BeerInfo from './pages/beers/BeerInfo';
import NewBeer from './pages/newBeer/NewBeer';
import RandomBeer from './pages/randomBeer/RandomBeer';

import NavBar from './layout/NavBar';

import { Switch, Route, Redirect, Router } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/beers" render={() => <Beers />} />
      </Switch>

      {/* <Switch>
        <Route path="/" exact render={() => <Beers />} />
        <Route path="/beers" exact render={() => <Beers />} />
        <Route path="/beers/:id" render={() => <BeerInfo />} />

        <Route path="/new" render={(props) => <NewBeer {...props} />} />
        <Route path="/search" render={(props) => <Search {...props} />} />
      </Switch> */}
    </>
  );
}

export default App;
