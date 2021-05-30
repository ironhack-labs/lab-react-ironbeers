import { Switch, Route } from "react-router-dom";
import React from 'react';
import Home from './Components/Home'
import AllBeers from './Components/AllBeers'
import RandomBeer from './Components/Randombeer'
import NewBeer from './Components/NewBeer'

import './App.css';
import BeerDetails from "./Components/BeerDetails";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/all' component={AllBeers}/>
        <Route exact path='/beer/create' component={NewBeer}/>
        <Route exact path='/random'component={RandomBeer}/>
        <Route exact path='/beer-details/:id' component={BeerDetails}/>
      </Switch>
    </div>
  );
}

export default App;
