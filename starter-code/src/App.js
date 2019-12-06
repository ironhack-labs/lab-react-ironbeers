import React from "react";
import { Switch, Route } from "react-router-dom";

/* CUSTOM COMPONENTS */
import home from "./components/home";
import beers from "./components/beers";
import randomBeer from "./components/random-beer";
import newBeer from "./components/new-beer";
import beerDetails from "./components/beerDetails"

function App() {
  return (
    <Switch>
      <Route exact path="/" component={home} />
      <Route path="/" component={beers} />
      <Route path="/beerDetails/:id" component={beerDetails} />
      <Route path="/form" component={newBeer} />
      <Route path="/randomBeer/:id" component={randomBeer} />
    </Switch>
  );
}

export default App;
