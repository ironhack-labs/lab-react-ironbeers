import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import BeersList from './pages/BeersList/BeersList'
import SingleBeer from './pages/SingleBeer/SingleBeer'

function App() {
  return (
    <Switch>
      <Route path='/' exact render={() => <Home></Home>} ></Route>
      <Route path='/beers' render={() => <BeersList></BeersList>} ></Route>
      <Route path='/:_id' render={props => <SingleBeer {...props}></SingleBeer>} ></Route>
    </Switch>
  );
}

export default App;
