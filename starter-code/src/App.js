import React, { Component } from "react";
import "./App.css";
import "./reset.css";
import { Switch, Route } from "react-router-dom";
import Home from "./home/Home.js";
import ListBeers from "./listBeers/ListBeers.js";
import NewBeer from "./newBeer/NewBeer.js";
import RandomBeer from "./randomBeer/RandomBeer.js";
import SingleBeer from "./singleBeer/SingleBeer.js";
import Header from "./header/Header.js";

class App extends Component {
  render() {
    return (
      <div className="App">
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
            render={() =>
              <React.Fragment>
                <Header></Header>
                <ListBeers></ListBeers>
              </React.Fragment>
            }
          />
          <Route
            exact
            path="/randomBeer"
            render={() =>
              <React.Fragment>
                <Header></Header>
                <RandomBeer></RandomBeer>
              </React.Fragment>
            }
          />
          <Route
            exact
            path="/newBeer"
            render={() =>
              <React.Fragment>
                <Header></Header>
                <NewBeer></NewBeer>
              </React.Fragment>
            }
          />
          <Route
            exact
            path="/beers/:id"
            render={props => {
              return (
                <React.Fragment>
                  <Header></Header>
                  <SingleBeer beer={props.match.params.id}></SingleBeer>
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
