import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Beers from "./components/Beers";
import Home from "./components/Home";
import RandomBeer from "./components/RandomBeer"

class App extends Component {
  render() {
    return (
      <div>

      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          
           <Route exact path="/beers" component={Beers} />
          <Route exact path="/random-beer" component={RandomBeer} />
        </Switch>
      </React.Fragment>
      </div>
    );
  }
}

export default App;