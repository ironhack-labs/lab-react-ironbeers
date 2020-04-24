import React, { Component } from "react";
import "./App.css";
import Beers from "./Components/Beers.js";
import Home from "./Components/Home.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img alt="home" src="./images/sydney-opera-house.png"></img>
        </header>

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/beers" component={Beers}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
