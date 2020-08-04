import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AllBeers from './components/AllBeers';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import AddBeer from './components/AddBeer';

function App() {
  return (
    <div>
    <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/beers" component={AllBeers}/>
        <Route path="/beers/:beerId" component={BeerDetails}/>
        <Route exact path="/random-beer" component={RandomBeer}/>
        <Route exact path="/new-beer" component={AddBeer}/>
      </Switch>
    </div>
  );
}

export default App;
