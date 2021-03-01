import React from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from "./Components/NavBar"
import Home from "./Components/Home";
import Beers from "./Components/Beers"
import RandomBeer from "./Components/RandomBeer"
import NewBeer from "./Components/NewBeer"
import BeerDetail from "./Components/BeerDetail"

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
    
      <NavBar /> 
      
        <Switch>      
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
          <Route exact path='/beers/:beerId' component={BeerDetail} />
        </Switch>

    </div>
  );
}

export default App;
