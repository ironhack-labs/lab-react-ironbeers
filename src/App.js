import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Beers from "./components/Beers";
import Home from "./components/Home";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";

function App() {
  return (
    <div className="App">
      <Route exact path={"/"}>
        <Home />
      </Route>
      <Route exact path={"/beers"}>
        <Beers />
      </Route>
      <Route exact path={"/random-beer"}>
        <RandomBeer />
      </Route>
      <Route exact path={"/new-beer"}>
        <NewBeer />
      </Route>
    </div>
  );
}

export default App;
