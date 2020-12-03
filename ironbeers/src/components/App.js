import React, { Component } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import Home from './navbar/Home'
import Beers from './Beers'
import BeerDetails from './beerdetails/BeerDetails'


function App() {
  return (
    <>
       <Switch>
       <Route path="/" exact render={() => <Home />} />
      <Route path="/beers" exact render={() => <Beers />} />
      <Route path="/beers/:id" render={props => <BeerDetails {...props} />} />
      
    </Switch>
      
      
      </>
  );
}

export default App;
