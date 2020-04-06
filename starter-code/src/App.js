import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Beers } from "./components/Beers";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Header />
          {/*<Route path="/beers" component={Beers} />*/}
          <Route path="/random-beer" component="" />
          <Route path="/new-beer" component="" />
        </Switch>
      </div>
    );
  }
}

export default App;
