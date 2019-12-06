import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Header from "./Header/Header";
import AllBerrs from "./AllBeers/AllBerrs";
import RandomBeer from "./RandomBeer/RandomBeer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <React.Fragment>
                  <Home></Home>
                </React.Fragment>
              );
            }}
          />
          <Route
            exact
            path="/beers"
            render={() => {
              return (
                <React.Fragment>
                  <Header></Header>
                  <AllBerrs></AllBerrs>
                </React.Fragment>
              );
            }}
          />
          <Route
            exact
            path="/random-beer"
            render={() => {
              return (
                <React.Fragment>
                  <Header></Header>
                  <RandomBeer></RandomBeer>
                </React.Fragment>
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
