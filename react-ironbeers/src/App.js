import React, { Component } from "react";
import logo from "./logo.svg";
import Beers from "./Components/Beers/Beers";
import RandomBeer from "./Components/Random-beer/RandomBeer";
import NewBeer from "./Components/New-beer/NewBeer";
import BeersDetail from "./Components/Beers/Beers";
import Index from "./Components/Index/Index";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        

        <Switch>
        <Route exact path="/" component={Index} />
          <Route exact path="/beers" component={Beers} />
          <Route  path="/beers:id" component={BeersDetail} />
          <Route exact path="/randomBeer" component={RandomBeer} />
          <Route exact path="/newBeer" component={NewBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
