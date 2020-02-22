import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./views/Home";
import AllBeers from "./views/AllBeers";
import RandomBeer from "./views/RandomBeer";
import NewBeer from "./views/NewBeer";
import OneBeer from "./views/OneBeer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
          <Route exact path="/" component={Home} />
          <Route path="/beers" component={AllBeers} />
          <Route path="/random-beer" component={RandomBeer} />
          <Route path="/new-beer" component={NewBeer} />
          <Route path="/beer/:id" component={OneBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
