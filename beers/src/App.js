import React, { Component } from "react";
import "./App.css";
import { Home } from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import { Allbeers } from "./pages/Allbeers";
import { Newbeer } from "./pages/Newbeer";
import { Randombeer } from "./pages/Randombeer";
import { Solobeer } from "./components/Solobeer";
import 'bulma/css/bulma.css';
import { Nav } from "./components/Nav";
class App extends Component {
  render() {
    return (
      <div className="App">
      {window.location.pathname === "/" ? null:<Nav/> }
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Allbeers} />
          <Route exact path="/newbeer" component={Newbeer}/>
          <Route exact path="/randombeer" component={Randombeer}/>
          <Route exact path="/beers/:id" component={Solobeer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
