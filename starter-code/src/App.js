import React, { Component } from "react";
import "./App.css";
import HomePage from "./Components/HomePage";
import { Switch, Route } from "react-router-dom";
import BeersList from "./Components/BeersList";
import SingleBeer from "./Components/SingleBeer";
import RandomBeer from "./Components/RandomBeer";
import NewBeer from "./Components/NewBeer";
import axios from "axios";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <HomePage></HomePage>;
            }}
          />
          <Route
            exact
            path="/beers"
            render={() => {
              return <BeersList></BeersList>;
            }}
          />
          <Route
            exact
            path="/beers/:beerId"
            render={() => {
              return <SingleBeer></SingleBeer>;
            }}
          />
          <Route
            exact
            path="/random-beer"
            render={() => {
              return <RandomBeer></RandomBeer>;
            }}
          />
          <Route
            exact
            path="/new-beer"
            render={() => {
              return <NewBeer></NewBeer>;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
