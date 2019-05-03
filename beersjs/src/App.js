import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./Home";
import Beers from "./Beers";
import Random from "./Random";
import NewBeer from "./NewBeer";
import NavBar from "./NavBar";
import SingleBeer from "./SingleBeer";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/random" component={Random} />
          <Route exact path="/newbeer" component={NewBeer} />
          <Route exact path="/beer/:id" component={SingleBeer} />
        </Switch>
      </React.Fragment>
    );
  }
}
