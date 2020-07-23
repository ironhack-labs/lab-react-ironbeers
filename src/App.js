import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ListBeers from "./pages/ListBeers";
import SingleBeer from "./pages/SingleBeer";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <NavMain /> */}
      <main className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/allBeers" component={ListBeers} />
          <Route path="/beers/:id" component={SingleBeer} />
          <Route path="/randomBeer" component={RandomBeer} />
          <Route path="/newBeer" component={NewBeer} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
