import React from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllBeers from "./components/AllBeers";
import BeerId from "./components/BeerId";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import NavbarContestProvider from "./context/ContextBeer";



const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <NavbarContestProvider>
      <Route exact path="/beers" component={AllBeers} />
      <Route path="/beers/:id" component={BeerId} />
      <Route path="/random-beer" component={RandomBeer} />
      <Route path="/new-beer" component={NewBeer} />
      </NavbarContestProvider>
    </Switch>
  </Router>
);

export default App;
