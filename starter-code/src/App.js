import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import AllBeers from "./components/AllBeers";
import RandomBeer from "./components/RandomBeer";
// import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Home></Home>} />
          <Route
            path="/allBeers"
            render={() => (
              <React.Fragment>
                <Header></Header>
                <AllBeers></AllBeers>
              </React.Fragment>
            )}
          />
          <Route
            path="/randomBeer"
            render={() => (
              <React.Fragment>
                <Header></Header>
                <RandomBeer></RandomBeer>
              </React.Fragment>
            )}
          />
          <Route
            path="/newBeer"
            render={() => (
              <React.Fragment>
                <Header></Header>
              </React.Fragment>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
