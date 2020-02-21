import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Beers from "./components/Beers";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import SingleBeer from "./components/SingleBeer";

class App extends Component {
  render() {
    return (
      <div className="root">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Navbar />
        </Switch>
        <Switch>
          <Route path="/beers/:beerId" component={SingleBeer}></Route>
          <Route extact path="/beers" component={Beers} />
        </Switch>

        <Route path="/random-beer" component={RandomBeer} />
        <Route path="/new-beer" component={NewBeer} />
      </div>
    );
  }
}

export default App;
