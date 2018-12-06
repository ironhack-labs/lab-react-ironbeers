import React, { Component } from "react";
import Beers from "../src/components/Beers/Beers";
import Home from "../src/components/Home/Home"
import "./App.css";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Beers" component={Beers} />
        </Switch>
      </div>
    );
  }
}

export default App;
