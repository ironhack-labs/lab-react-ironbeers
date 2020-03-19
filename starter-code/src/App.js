import React from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllBeers from "./components/AllBeers";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";


const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/beers" component={() => <AllBeers/>}/>
      <Route path="/random-beer" component={() => <RandomBeer/>}/>
      <Route path="/new-beer" component={() => <NewBeer/>}/>
    </Switch>
  </Router>
);
export default App;
