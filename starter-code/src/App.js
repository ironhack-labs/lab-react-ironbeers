import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import axios from "axios";

import Home from "./components/pages/Home/Home";
import Beers from "./components/pages/Beers/Beers";
import RandomBeer from "./components/pages/RandomBeer/RandomBeer";
import SelectedBeer from "./components/pages/SelectedBeer/SelectedBeer";
import NewBeer from "./components/NewBeer/NewBeer";

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="homebar">
            <Link style={{ color: "white", textDecoration: "none" }} to="/">
              <h1>HOME</h1>
            </Link>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/beers" component={Beers} />
            <Route path="/beers/:id" component={SelectedBeer} />
            <Route path="/random-beer" component={RandomBeer} />
            <Route path="/new-beer" component={NewBeer} />
          </Switch>
        </div>
      </div>
    );
  }
}
