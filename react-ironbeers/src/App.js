import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";

import Header from "./components/Header";
import AllBeers from "./components/AllBeers";
import OneBeer from "./components/OneBeer";
import RandomBeer from "./components/RandomBeer";
import CreateBeer from "./components/CreateBeer";

import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>IronBeers</h1>
        <ul>
          <li>
            <Link to={`/beers`}>All beers</Link>
          </li>
          <li>
            <Link to={`/random-beer`}>Random beer</Link>
          </li>
          <li>
            <Link to={`/new-beer`}>New beer</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/beers" component={AllBeers} />
        </Switch>
        <Switch>
          <Route exact path="/beers/:beerId" component={OneBeer} />
        </Switch>
        <Switch>
          <Route exact path="/random-beer" component={RandomBeer} />
        </Switch>
        <Switch>
          <Route exact path="/new-beer" component={CreateBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
