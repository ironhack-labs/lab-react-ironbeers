import React, { Component } from "react";

import "./App.css";
import { Switch, Route } from "react-router-dom";
import BeersList from "./components/beers/beersList";
import BeerDetails from "./components/beers/beerDetails";
import RandomBeer from "./components/beers/randomBeer";
import BeerForm from "./components/beers/newBeer";
import Home from "./components/beers/home";
import NavBar from "./components/beers/navBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />

        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={BeersList} />
          <Route exact path="/RandomBeer" component={RandomBeer} />
          <Route path="/newBeer" component={BeerForm} />
          <Route path="/:id" component={BeerDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
