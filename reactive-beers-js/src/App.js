import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home.js";
import Beers from "./components/Beers.js";
import Navbar from "./components/Navbar.js";
import "bulma/css/bulma.css";

import RandomBeer from "./components/RandomBeer.js";
import NewBeer from "./components/NewBeer.js";

import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/random-beers" component={RandomBeer} />
        {/* <Route exact path="/new-beer" component={NewBeer} /> */}
      </Switch>
    </div>
  );
};

export default App;
