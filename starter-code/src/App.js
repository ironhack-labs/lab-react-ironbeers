import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import AppRoutes from "./routes";
//import Navbar from "./components/Navbar";
import "./App.css";

import HomeView from "./views/HomeView";
import BeerListView from "./views/BeerListView";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import SingleBeer from "./components/SingleBeer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route path="/beers" component={BeerListView} />
            <Route path="/random-beer" component={RandomBeer} />
            <Route path="/new-beer" component={NewBeer} />
            <Route path="/beer/:id" component={SingleBeer} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
