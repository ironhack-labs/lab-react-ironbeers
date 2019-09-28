import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Beers from "./components/Beers";
import Home from "./components/Home";
import SingleBeer from "./components/SingleBeer"
import RandomBeer from "./components/RandomBeer"
import NewBeer from "./components/NewBeer"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/beers/:beerId" component ={SingleBeer}/>
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
