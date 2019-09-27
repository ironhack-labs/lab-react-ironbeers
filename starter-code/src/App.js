import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Beers from "./components/Beers";
import Beer from "./components/Beer";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import Navbar from "./components/Navbar";
import axios from "axios";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
        <Route exact path="/" component={Home} />
        <>
        <Navbar />
        <Route exact path="/beers/:id" component={Beer} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
        </>
        </Switch>
      </div>
    );
  }
}

export default App;
