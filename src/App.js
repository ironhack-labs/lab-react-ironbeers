import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home"
import Beers from "./components/Beers"
import { Link, Switch, Route } from "react-router-dom";
import SingleBeer from "./components/SingleBeer";
import RandomBeer from "./components/RandomBeer"
import NewBeer from "./components/NewBeer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <Link exact to="/">
              Home
            </Link>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/new" component={NewBeer} />
          <Route exact path="/beers/:id" component={SingleBeer} />
          <Route path="/beers" component={Beers} />
          <Route path="/random" component={RandomBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
