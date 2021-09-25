import React from 'react';

import HomePage from "./componants/pages/HomePage";
import Beers from "./componants/pages/Beers";
import BeerDetails from "./componants/pages/BeerDetails";
import RandomBeer from "./componants/pages/RandomBeer";

import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/beers/:id" component={BeerDetails} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/" component={HomePage} /> 
      </Switch>
    </div>
  );
}

export default App;
