import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './components/Home';
import Navbar from './components/Navbar';
import BeersList from './components/BeersList';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'

function App() {
  return (
    <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={BeersList} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
          <Route exact path="/beers/:id" component={BeerDetails} />
        </Switch>
      
    </div>
  );
}

export default App;
