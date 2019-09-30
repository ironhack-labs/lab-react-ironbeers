import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomeView from "./views/Home";
import BeersView from "./views/Beers";
import RandomView from "./views/RandomBeer";
import NewView from "./views/NewBeer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={HomeView} />
            <Route path="/beers" component={BeersView} />
            <Route path="/random-beer" component={RandomView} />
            <Route path="/new-beer" component={NewView} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
