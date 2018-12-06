import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./Components/Main/Main";
import AllBeers from "./Components/Allbeers/Allbeers";
import NewBeer from "./Components/NewBeer/NewBeer"

import { Route, Switch } from "react-router-dom";
import RandomBeer from "./Components/RandomBeer/RandomBeer";

class App extends Component {
  render() {
    return (
      <div className="App">

        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/allbeers" component={AllBeers} />
          <Route path="/newbeer" component={NewBeer} />
          <Route path="/randombeer" component={RandomBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
