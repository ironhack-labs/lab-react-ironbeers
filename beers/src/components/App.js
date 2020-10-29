import React from 'react';
import './App.css';

import Home from './pages/home/Home';
import Navbar from './layout/navbar';
import AllBeers from './pages/allBeers/AllBeers';
import SingleBeer from './pages/allBeers/SingleBeer'
import RandomBeer from './pages/randomBeer/RandomBeer';
import NewBeer from './pages/newBeer/NewBeer';

import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="phonescreen">
      <Navbar />

      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/allbeers" render={() => <AllBeers />} />
        <Route path="/randombeer" render={() => <RandomBeer />} />
        <Route path="/newbeer" render={(props) => <NewBeer {...props} />} />
        <Route path="/:beerId" render={(props) => <SingleBeer {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
