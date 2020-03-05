import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./HomePage/Home";
import HomeLink from "./HomePage/HomeLink";
import Beer from "./HomePage/Beer";
import RandomBeer from "./HomePage/RandomBeer";
import AllBeers from "./HomePage/AllBeers";
import NewBeer from "./HomePage/NewBeer";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="root">
          <div>
            <div className="row">
              <Switch>
                <Route exact path="/" component={Home} />
                <HomeLink />
              </Switch>
              <Route exact path="/beers" component={AllBeers} />
              <Route exact path="/random-beer" component={RandomBeer} />
              <Route exact path="/new-beer" component={NewBeer} />
              <Route path="/beers/:beerId" component={Beer} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
