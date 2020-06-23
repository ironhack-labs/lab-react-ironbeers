import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import BeerDetails from './components/BeerDetails';

function App(){
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" render={(props) => <Beers />} />
        <Route path="/beers/:beerId" render={(props) => <BeerDetails {...props} />} />
        <Route path="/random-beer" component={RandomBeer} />
        <Route path="/new-beer" render={(props) => <NewBeer {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
