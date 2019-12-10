import React, { Component } from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomeView from "./views/HomeView";
import BeerListView from "./views/BeerListView";
import SingleBeerView from "./views/SingleBeerView";
import RandomBeersView from "./views/RandomBeersView";
import NewBeerView from "./views/NewBeerView";

// import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Switch>
            <Route path="/beers/:id" component={SingleBeerView} />
            <Route path="/beers" component={BeerListView} />
            <Route path="/random-beer" component={RandomBeersView} />
            <Route path="/new-beer" component={NewBeerView} />
            <Route path="/" component={HomeView} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
