import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import AllBeers from "./AllBeers";
import NewBeer from "./NewBeer";
import RandomBeer from "./RandomBeer";
import Navbar from "./Navbar";
import SingleBeer from "./SingleBeer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="root">
          <div>
            {/* <Navbar /> */}
            <div className="row">
              <Switch>
                <Route exact path="/" component={Home} />
                <Navbar />
              </Switch>
              <Route exact path="/beers" component={AllBeers} />
              <Route exact path="/random-beer" component={RandomBeer} />
              <Route exact path="/new-beer" component={NewBeer} />
              <Route path="/beers/:beerId" component={SingleBeer} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
