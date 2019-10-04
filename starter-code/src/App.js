import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import Beers from "./components/Beers";
import RandomB from "./components/RandomBeer";
import NewB from "./components/NewBeer";
import BeerInfo from "./components/BeerDetail";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/beers/:beerId" component={BeerInfo} />
          <Route exact path="/random-beer" component={RandomB} />
          <Route exact path="/new-beer" component={NewB} />
        </Switch>
      </div>
    );
  }
}

export default App;