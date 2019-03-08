import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";

import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import Beers from "./Components/Beers";
import IndividualView from "./Components/IndividualView";
import RandomBeer from "./Components/RandomBeer";
import NewBeer from "./Components/NewBeer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/beers/:id" component={IndividualView} />
          <Route exact path="/random-beers" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
          {/*
          
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
          */}
        </Switch>
      </div>
    );
  }
}

export default App;
