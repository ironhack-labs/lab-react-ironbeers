import React, { Component } from "react";
import "./App.css";
import BeerList from "./components/beers/BeerList";
import BeerDetails from "./components/beers/BeerDetail";
import { Switch, Route } from "react-router-dom";
import RandomBeer from "./components/beers/RandomBeer";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exat path="/beer" component={BeerList} />
        <Route exat path="/single/:id" component={BeerDetails} />
        <Route exat path="/random" component={RandomBeer} />
      </Switch>
    </div>
  );
}

export default App;
