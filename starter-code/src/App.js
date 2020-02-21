import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import AllBeers from "./Components/AllBeers";
import RandomBeer from "./Components/RandomBeer";
import NewBeer from "./Components/NewBeer";
import SingleBeer from "./Components/SingleBeer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/beers" component={AllBeers} />
          <Route path="/beer/:Id" component={SingleBeer} />
          <Route path="/beer/random" component={RandomBeer} />
          <Route path="/newbeer" component={NewBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
