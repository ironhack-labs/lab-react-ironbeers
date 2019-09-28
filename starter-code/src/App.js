import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
//============= Components
import Home from "./components/Home";
import ListBeers from "./components/ListBeers";
import NewBeer from "./components/NewBeer";
import SingleBeer from "./components/SingleBeer";
import RandomBeer from "./components/RandomBeer";
//=============

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/list-beers" component={ListBeers} />
          <Route path="/new-beer" component={NewBeer} />
          <Route path="/single-beer/:id" component={SingleBeer} />
          <Route path="/random-beer" component={RandomBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
