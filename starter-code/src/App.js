import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home";
import Beers from "./components/beers";
import RandomBeer from "./components/random-beer";
import NewBeer from "./components/new-beer";
import MyButton from "./components/ui/button";

const App = () => {
  return (
    <div className="App">
      <MyButton path="/">Home</MyButton>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/beers">
          <Beers />
        </Route>
        <Route path="/random-beer">
          <RandomBeer />
        </Route>
        <Route path="/new-beer">
          <NewBeer />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
