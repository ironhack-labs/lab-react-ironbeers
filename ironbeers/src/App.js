import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Allbeers from "./AllBeers/Allbeers";
import BeerDetail from "./BeerDetail/BeerDetail";
import RandomBeer from "./RandomBeer/RandomBeer";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Home />

        <Switch>
          {/* <Route
            exact
            path="/beers"
            render={() => {
              return <Allbeers />;
            }}
          /> */}
          <Route exact path="/beers" component={Allbeers} />
          <Route exact path="/detail/:id" component={BeerDetail} />
          <Route exact path="/random-beer" component={RandomBeer} />
          />
        </Switch>
      </div>
    );
  }
}
