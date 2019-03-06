import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import BeersList from "./components/beers/BeersList";
import BeerDetails from "./components/beers/BeersDetails";
import BeerRandom from "./components/beers/BeersRandom";
import NavBar from "./components/beers/NavBar";
import AddBeer from "./components/beers/AddBeers"
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/beerlist" component={BeersList} />
            <Route exact path="/beerlist/:id" component={BeerDetails} />
            <Route exact path="/beerrandomlist" component={BeerRandom} />
            <Route exact path="/newbeer" component={AddBeer} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
