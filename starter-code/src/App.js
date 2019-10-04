import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import Beers from "./Beers";
import Beer from "./Beer";
import RandomBeer from "./RandomBeer";
import NewBeer from "./NewBeer";

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/beers" component={Beers} />

      <Route exact path="/random-beer" component={RandomBeer} />

      <Route exact path="/new-beer" component={NewBeer} />

      <Route exact path="/beers/:id" component={Beer} />
    </Switch>
  </div>
);

export default App;
