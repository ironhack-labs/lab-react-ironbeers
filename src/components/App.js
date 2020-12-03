import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './../components/App.css';

import Home from './Home/Home'
import NavBar from './NavBar/NavBar'
import BeerList from './BeerList/BeerList'
import BeerDetails from './BeerDetails/BeerDetails'
import RandomBeer from './RandomBeer/RandomBeer'

import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/beers" exact render={() => <BeerList />} />
        <Route path="/beers/:beer_id" exact render={props => <BeerDetails {...props} />} />
        <Route path="/random-beer" exact render={props => <RandomBeer {...props} />} />

      </Switch>
    </>
  );
}

export default App;
