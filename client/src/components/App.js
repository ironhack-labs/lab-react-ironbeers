import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Navbar from './layout/navbar/Navbar'
import Index from './pages/index/Index'

import BeersList from './pages/beersList/BeersList'
import BeerDetail from './pages/beerDetail/BeerDetail'

import './App.css';


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact render={() => <Index />} />
        <Route path="/beers" exact render={() => <BeersList />} />
        <Route path="/beers/details/:id" render={props => <BeerDetail {...props} />} />
      </Switch>
    </>
  );
}

export default App;
