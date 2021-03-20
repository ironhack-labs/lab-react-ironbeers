import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Beers from "./views/Beers";
import OneBeer from "./views/OneBeer";
import RandomBeer from "./views/RandomBeer";
import FormBeer from "./views/FormBeer";

import './App.css';

function App() {
  return (
    <div className="App">
       <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers/new-beer" component={FormBeer} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/beers/random-beer" component={RandomBeer} /> 
        <Route exact path="/beers/:id" component={OneBeer} /> 
      </Switch>
    </div>
  );
}

export default App;
