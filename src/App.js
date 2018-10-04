import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import Header from "./components/Header";
import AllBeers from "./components/AllBeers";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Route path="/beers" component={Header} />
            <Route path="/new-beer" component={Header} />
            <Route path="/random-beer" component={Header} />
          </div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/beers" component={AllBeers} />
            <Route exact path="/random-beer" component={RandomBeer} />
            <Route exact path="/new-beer" component={NewBeer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
