import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Beers from "./components/Beers.jsx";
import RandomBeer from "./components/RandomBeer.jsx";
import NewBeer from "./components/NewBeer.jsx";
import InfoBeer from "./components/InfoBeer.jsx";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route path="/random-beer" component={RandomBeer} />
          <Route path="/new-beer" component={NewBeer} />
          <Route path="/beers/:id" component={InfoBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
