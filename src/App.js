import React from 'react';
import './App.css';
import Home from "./views/Home";
import Beers from "./views/Beers";
import OneBeer from "./views/OneBeer";
import RandomBeer from "./views/RandomBeer";
import FormBeer from "./views/FormBeer";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers/new-beer" component={FormBeer} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/beers/random-beer" component={RandomBeer} />
        <Route extract path="/beers/onebeer" component={OneBeer} />
      </Switch>
    </div>
  );
}

export default App;
