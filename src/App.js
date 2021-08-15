import React from "react";

import { Switch, Route, Link, NavLink } from "react-router-dom";
import Home from "./Components/Home";
import AllBeers from "./Components/AllBeers";
import BeerDetails from "./Components/BeerDetails";
import RandomBeer from "./Components/RandomBeer";
import NewBeer from "./Components/NewBeer";
import Header from "./Components/Header";
function App() {
  return (
    <div className="App">
    

      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/beers" component={AllBeers} />
        <Route
          exact
          path="/beers/:id"
          component={BeerDetails}
        />

        <Route
          exact
          path="/random-beer"
          component={RandomBeer}
        />

        <Route
          exact
          path="/new-beer"
          component={NewBeer}
        />
      </Switch>
    </div>
  );
}

export default App;
