import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Beers from "./Beers";

class App extends Component {
  constructor() {
    super();
    // this.state = {
    //   beers: beers
  }

  render() {
    return (
      <div className="App">
        <nav className="nav" />{" "}
        <Switch>
          <Route exact path="/" component={Home} />{" "}
          <Route path="/beers" component={Beers} />{" "}
          {/* <Route path="/ramdom-beer" component={RamdomBeer} />
                              <Route path="/new-beer" component={Newbeer} /> */}{" "}
          * /} */ }{" "}
        </Switch>{" "}
      </div>
    );
  }
}

export default App;
