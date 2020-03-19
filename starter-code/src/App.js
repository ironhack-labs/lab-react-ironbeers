import React from "react";
import { Home } from "./pages/Home.page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/beers" component={Home}></Route>
        <Route path="/random-beer" component={Home}></Route>
        <Route path="/new-beer" component={Home}></Route>
      </Switch>
    </Router>
  );
};
