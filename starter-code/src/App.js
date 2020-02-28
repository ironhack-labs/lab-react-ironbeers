import React, { Component } from "react";
import "./App.css";
import Head from "./components/Navbar";
import AllBeers from "./components/allBeers";
import RandomBeer from "./components/randomBeer";
import OneBeer from "./components/oneBeer";
import NewBeer from "./components/newBeer";

import { Switch, Route, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />

        <Switch>
          <Route exact path="/beers" render={() => <AllBeers />} />
          <Route path="/beers/random" render={() => <RandomBeer />} />
          <Route
            path="/beers/:id"
            render={match => () => <OneBeer {...match} />}
          />
          <Route path="/beers/new" render={() => <NewBeer />} />

          {/* <Route path="/urlstuff/:clothe/:color" component={UrlStuff} /> */}
          {/* <Route
            path="/urlstuff/:clothe/:color"
            render={match => <UrlStuff {...match} />}
          /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
