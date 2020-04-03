import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import BeerList from "./pages/BeerList";

import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/beers" component={BeerList}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
