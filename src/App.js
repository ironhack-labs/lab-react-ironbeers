import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from "./Views/Home";
import Beers from "./Views/Beers";
import OneBeer from "./Views/OneBeer";
import RandomBeer from "./Views/RandomBeer";
import BeerForm from "./Views/BeerForm";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/beers/all" component={Beers}/>
        <Route exact path="/beers/random" component={RandomBeer}/>
        <Route exact path="/beers/new" component={BeerForm}/>
        <Route exact path="/beers/:id" component={OneBeer}/>
      </Switch>
    </div>
  )
}

export default App;
