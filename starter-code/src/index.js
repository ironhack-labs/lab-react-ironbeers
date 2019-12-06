import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import NewBeer from "./components/NewBeer";
import RandomBeer from "./components/RandomBeer";
import Home from "./components/Home";
import Beers from "./components/Beers";

ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/beers" component={Beers} />
      <Route exact path="/random-beer" component={RandomBeer} />
      <Route exact path="/new-beer" component={NewBeer} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
