import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
// import { Navbar, Table, Row, Col, Cards } from "react-bootstrap";

import HomeView from "./components/Home";
import AllView from "./components/All";
import NewView from "./components/New";
import RandomView from "./components/Random";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomeView} />
          <Route path="/beers" component={AllView} />
          <Route path="/random-beer" component={RandomView} />
          <Route path="/new-beer" component={NewView} />
        </Switch>
      </div>
    );
  }
}

export default App;
