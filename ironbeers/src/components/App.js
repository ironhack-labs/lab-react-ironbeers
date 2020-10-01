import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './home/home'
import ListBeers from './beers/ListBeers'
import BeerDetails from './beers/BeerDetails'
import BeerDetailsRandom from './beers/BeerDetailsRandom'


import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/beers" exact render={() => <ListBeers />} />
        <Route path="/beers/:id" render={props => <BeerDetails {...props} />} />
        <Route path="/random-beer" render={props => <BeerDetailsRandom {...props}/>} />
      </Switch>

    </>
  );
}

export default App;
