import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import BeerList from "./Components/BeerList";
import BeerDetail from "./Components/BeerDetail";
import RandomBeer from "./Components/RandomBeer";
import NewBeer from "./Components/NewBeer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <React.Fragment>
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <Home></Home>;
              }}
            />
            <Route
              exact
              path="/beers"
              render={() => {
                return <BeerList></BeerList>;
              }}
            />
            <Route exact path="/BeerDetail/:id" component={BeerDetail} />
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
                return <NewBeer />;
              }}
            />
          </Switch>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
