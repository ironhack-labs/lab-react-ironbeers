import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Beers from './components/Beers'
import BeerDetail from './components/BeerDetail';
import RandomBeer from './components/BeerRandom';
import NewBeer from './components/NewBeer';

function App() {
  return (
    <div className="App">
        <Switch>
      <Route path="/home"  component={Home}/>
      <Route exact path="/beers" component={Beers}/>
      <Route path="/beers/:id" component={BeerDetail}/>
      <Route path="/random-beers" component={RandomBeer}/>
      <Route path="/new-beer" component={NewBeer}/>

      </Switch>
    </div>
  );
}

export default App;
