import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import "bulma/css/bulma.css";
import Home from "./Home";
import Header from "./Header";
import Beers from "./Beers";
import Beer from "./Beer";
import axios from "axios";
import RandomBeer from "./RandomBeer";
import NewBeer from "./NewBeer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/beers"
            render={() => {
              return (
                <div>
                  <Header></Header>
                  <Beers></Beers>
                </div>
              );
            }}
          />

          <Route
            path="/beers/:id"
            render={props => {
              return (
                <div>
                  <Header></Header>
                  <Beer id={props.match.params.id}></Beer>
                </div>
              );
            }}
          />

          <Route
            exact
            path="/new-beer"
            render={() => {
              return (
                <div>
                  <Header></Header>
                  <NewBeer></NewBeer>
                </div>
              );
            }}
          />

          <Route
            exact
            path="/random-beer"
            render={() => {
              return (
                <div>
                  <Header></Header>
                  <RandomBeer></RandomBeer>
                </div>
              );
            }}
          />

          <Route
            path="/"
            render={() => {
              return <Home></Home>;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
