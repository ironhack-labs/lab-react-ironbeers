import React, { Component } from "react";
import "./App.css";
import ListBeers from "./components/ListBeers";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import SingleBeer from "./components/SingleBeer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={ListBeers}/>
            <Route path="/:id" component={SingleBeer}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
