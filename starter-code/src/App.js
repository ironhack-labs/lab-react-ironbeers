import React, { Component } from "react";
import "./App.css";
import Home from './components/home.js';
import Beers from "./components/beer/Beers.js";
import Random from "./components/random/Random.js";
import New from "./components/new/New.js";
import { Switch, Route } from "react-router-dom";
import Navbar from './components/navbar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/random" component={Random} />
          <Route exact path="/new" component={New} />
        </Switch>
      </div>
    );
  }
}

export default App;
