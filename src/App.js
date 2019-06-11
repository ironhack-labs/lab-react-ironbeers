import React, { Component, Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Beers from "./components/Beers";
import Beer from "./components/Beer";
import NewBeer from "./components/NewBeer";
import RandomBeer from "./components/RandomBeer";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Beers" component={Beers} />
          <Route exact path="/RandomBeer" component={RandomBeer} />
          <Route exact path="/NewBeer" component={NewBeer} />
          <Route exact path="/Beers/:id" component={Beer} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
