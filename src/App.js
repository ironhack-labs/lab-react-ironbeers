import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";

import Home from "./components/home";
import Beers from "./components/beers"
import RandomBeer from "./components/random-beer"
import AddNewBeer from "./components/new-beer"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={AddNewBeer} />
      </Switch>
     
    </div>
  );
}

export default App;
