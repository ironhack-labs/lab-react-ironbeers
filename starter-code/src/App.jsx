import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeView from "./views/Home";
import RandomBeer from "./components/RandomBeer";
import Beers from "./components/Beers";
import NewBeer from "./components/NewBeer";

import BeerDetail from "./components/BeerDetail";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomeView} />
            <Route path="/beers" exact component={Beers} />
            <Route path="/beer/:id" exact component={BeerDetail} />
            <Route path="/randombeer" exact component={RandomBeer} />
            <Route path="/new-beer" exact component={NewBeer} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
