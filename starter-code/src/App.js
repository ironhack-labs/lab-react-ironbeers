import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/homepage/index";
import AllBeers from "./components/views/AllBeers";
import SingleBeer from "./components/views/SingleBeer";
import RandomBeer from "./components/views/RandomBeer";
import NewBeer from "./components/views/NewBeer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/beers" component={() => <AllBeers />} />
        <Route
          exact
          path="/beers/:id"
          component={props => <SingleBeer {...props} />}
        />
        <Route exact path="/random-beer" component={() => <RandomBeer />} />
        <Route exact path="/new-beer" component={() => <NewBeer />} />
      </Switch>
    </div>
  );
}

export default App;
