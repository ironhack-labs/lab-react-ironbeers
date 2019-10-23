import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/beers" component={Beers} /> 
          <Route path="/random-beer" component={Random} /> 
          <Route path="/new-beer" component={NewBeer} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
