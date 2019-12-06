import React, { Component } from "react";

import Home from "./components/Home";
import Beers from "./components/Beers";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import Details from "./components/Details";
import Form from "./components/form";

import { Switch, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/form" component={Form} />
          <Route path="/random-beer" component={RandomBeer} />
          <Route exact path="/:id" component={Details} />
          <Route path="/new-beer" component={NewBeer} />
        </Switch>
      </>
    );
  }
}

export default App;
