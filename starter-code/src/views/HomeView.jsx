import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Beers from "./../views/Beers";
import RandomBeer from "./../views/RandomBeer";
import NewBeer from "./../views/NewBeer";

export default class HomeView extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route>
            <Beers />
            <RandomBeer />
            <NewBeer />
          </Route>
        </Switch>
      </div>
    );
  }
}
