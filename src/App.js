import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Beers from "./components/Beers";
import RandomBeer from "./components/RandomBeer";
import NewBeer from './components/NewBeer';
import Home from './components/Home';
import OneBeer from './components/OneBeer';

//me faltaba poner la ruta de OneBeer!!
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/beers" component={Beers}/>
        <Route exact path="/random-beer" component={RandomBeer}/>
        <Route exact path="/new-beer" component={NewBeer}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/beers/:_id" component={OneBeer}/>
      </Switch>
  
    </div>
  );
}

export default App;
