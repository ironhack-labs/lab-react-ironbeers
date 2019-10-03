import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import RandomBeer from "./pages/RandomBeer/RandomBeer";
import Beers from "./pages/Beers/Beers";
import NewBeer from "./pages/NewBeer/NewBeer";
import BeerDetail from './pages/BeerDetail/BeerDetail'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
          <Route exact path="/view/:beerID" component={BeerDetail} />
        </Switch>
      </div>
    );
  }
}
