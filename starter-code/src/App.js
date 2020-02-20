import React, { Component } from 'react';
import logo from './logo.svg';
import { Switch, Route } from "react-router-dom";

import Beers from "./views/Beers";
import RandomBeer from "./views/Random-beer";
import NewBeer from "./views/New-beer";
import OneBeer from "./views/One-beer";

import NavMain from "./components/NavMain";
import "./App.css";

function App() {
  return (
      <div className="App">
        <NavMain />

        <Switch>
          {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
          <Route exact path="/" component={Beers} />
          <Route path="/random-beer" component={RandomBeer} />
          <Route path="/new-beer" component={NewBeer} />
          <Route path="/one-beer/:beerId" component={OneBeer} />
        </Switch>
      </div>
  );
}
export default App;
