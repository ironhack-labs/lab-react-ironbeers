import React, { Component } from "react";
import "./App.css";
import Home from "./Components/Home";
import ListBeers from "./Components/ListBeers";
import RandomBeer from "./Components/RandomBeer";
import NewBeer from "./Components/NewBeer";
import SingleBeer from "./Components/SingleBeer";
import { Route, Switch } from "react-router-dom";

const NotFound = () => {
  return <div>Page not found</div>;
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={ListBeers} />
          <Route exact path="/beers/:id" component={SingleBeer} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
