import React from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllBeers from "./components/AllBeers";
import SingleBeer from "./components/SingleBeer";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";

const App = () => (
  <Router>
    <Switch>
      // A los componentes hay que llamarlos
      <Route path="/" exact component={Home} />
      <Route path="/beers" exact component={AllBeers} />
      <Route path="/beers/:id" component={SingleBeer} />
      <Route path="/random-beer" component={RandomBeer} />
      <Route path="/new-beer" component={NewBeer} />
    </Switch>
  </Router>
);
export default App;
