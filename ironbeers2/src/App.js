import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./components/Home";
import { Switch, Route } from 'react-router-dom';
import Beers from "./components/Beers";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarComponent />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
        </Switch>
      </div>
    );
  }
}

export default App;
