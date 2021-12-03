import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/index/Home';
import ListBeers from './pages/Beers/ListBeers';
import RandomBeer from './pages/RandomBeer/RandomBeer';
import NewBeers from './pages/newBeer/newbeer';


function App() {
  return (
    <>
      <main>
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/beers" render={() => <ListBeers />} />
          <Route path="/newbeer" render={() => <NewBeers />} />
          <Route path="/randomBeer" render={() => <RandomBeer />} />
        </Switch>
      </main>
    </>
  );
}

export default App;
