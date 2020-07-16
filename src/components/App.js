import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import Home from './home/home'
import Navigation from './navBar/navBar';
import BeerList from './all-beers/allBeers';


function App() {
  return (
    <>
      <Navigation/>
      <Switch>
        <Route exact path="/" render={() => <Home />}/>
        <Route exact path="/beers" render={() => <BeerList />} />
      </Switch>
      
    </>
  );
}

export default App;
