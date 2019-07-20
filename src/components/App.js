import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Beers from "./pages/Beers";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import DetailBeer from "./pages/DetailBeer";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">



        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/beers" exact component={Beers} />
          <Route path="/random-beer" exact component={RandomBeer} />
          <Route path="/new-beer" component={NewBeer} />
          <Route path="/beer-detail" component={DetailBeer} />
          <Route render={() => <h1>404</h1>} />
        </Switch>
    </div>
  );
}

export default App;
