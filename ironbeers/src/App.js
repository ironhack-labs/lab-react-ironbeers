import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Allbeers from "./AllBeers/Allbeers";
import BeerDetail from "./BeerDetail/BeerDetail";
import RandomBeer from "./RandomBeer/RandomBeer";
import "./App.css";
import AddNewBeer from "./AddNewBeer/AddNewBeer";

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          {/* <Route
            exact
            path="/beers"
            render={() => {
              return <Allbeers />;
            }}
          /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Allbeers} />
          <Route exact path="/detail/:id" component={BeerDetail} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={AddNewBeer} />
          />
        </Switch>
      </div>
    );
  }
}
