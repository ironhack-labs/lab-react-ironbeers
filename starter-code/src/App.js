import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import home from "./components/home";
import beers from "./components/beers";
import randomBeer from "./components/randomBeer";
import newBeer from "./components/newBeer"; ////FORM EXAMPLE
import singleBeerDetails from "./components/SingleBeerDetails";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/beers" component={beers}></Route>
          <Route path="/random-beer" component={randomBeer}></Route>
          <Route path="/new-beer" component={newBeer}></Route>
          <Route path="/:beerId" component={singleBeerDetails}></Route>
          <Route exact path="/" component={home}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
