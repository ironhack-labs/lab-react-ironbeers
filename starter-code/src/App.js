import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import Beers from "./components/Beers";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import SingleBeer from "./components/SingleBeer";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <>
            <Header />
            <Route exact path="/beers" component={Beers} />
            <Route exact path="/beers/:beerId" component={SingleBeer} />
            <Route exact path="/random-beer" component={RandomBeer} />
            <Route exact path="/new-beer" component={NewBeer} />
          </>
        </Switch>
      </div>
    );
  }
}

export default App;
