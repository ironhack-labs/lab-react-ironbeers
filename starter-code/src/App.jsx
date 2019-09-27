import React, { Component } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import HomeView from "./views/HomeView";
import BeerList from "./views/BeerList";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <HomeView path="/" /> */}
        <Switch>
          <Route path="/" exact component={HomeView} />
          <Route path="/beerlist" component={BeerList} />

          <Route></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
