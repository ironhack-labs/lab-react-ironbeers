import React, { Component, Fragment } from "react";
import "./App.css";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import NewBeer from "./components/NewBeer";
import AllBeers from "./components/AllBeers";
import RandomBeer from "./components/RandomBeer";
import Header from "./components/Header";
import CompleteBeer from "./components/CompleteBeer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/beers"
            render={props => {
              return (
                <Fragment>
                  <Header />
                  <AllBeers />
                </Fragment>
              );
            }}
          />
          <Route
            exact
            path="/random-beer"
            render={props => {
              return (
                <Fragment>
                  <Header />
                  <RandomBeer />
                </Fragment>
              );
            }}
          />
          <Route
            exact
            path="/new-beer"
            render={props => {
              return (
                <Fragment>
                  <Header />
                  <NewBeer />
                </Fragment>
              );
            }}
          />
          <Route
            exact
            path="/beers/:id"
            render={props => {
              return (
                <Fragment>
                  <Header />
                  <CompleteBeer {...props} random={false} />
                </Fragment>
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
