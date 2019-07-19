import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Beers from "./pages/Beers";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";

import { Route, Switch, Link } from "react-router-dom";

import { Row, Col, Container } from "reactstrap";

function App() {
  return (
    <div className="App">



        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/beers" exact component={Beers} />
          <Route path="/random-beer" exact component={RandomBeer} />
          <Route path="/new-beer" component={NewBeer} />
          <Route render={() => <h1>404</h1>} />
        </Switch>
    </div>
  );
}

export default App;
