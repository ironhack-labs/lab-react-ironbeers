import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Allbeers from "./AllBeers/Allbeers";
import BeerDetail from "./BeerDetail/BeerDetail";

export default class App extends Component {
  render() {
    return (
      <div>
        <Home />

        <Switch>
          <Route
            exact
            path="/beers"
            render={() => {
              return <Allbeers />;
            }}
          />
          <Route
            exact
            path="/detail/:id"
            render={() => {
              return <Allbeers />;
            }}
          />
          <Route
            exact
            path="/detail/:id"
            render={props => {
              var chosenBeer = props.match.params.chosenBeer;
              return <BeerDetail movie={this.state.movies[chosenBeer]} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}
