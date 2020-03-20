import React from "react";
import { Home } from "./pages/Home.page";
import { AllBeers } from "./pages/Beers.page";
import { RandomBeer } from "./pages/Random.page";
import { NewBeer } from "./pages/New.page";
import { Layout } from "./layouts/layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home}></Route>
      <Layout>
        <Switch>
          <Route path="/beers" component={AllBeers}></Route>
          <Route path="/random-beer" component={RandomBeer}></Route>
          <Route path="/new-beer" component={NewBeer}></Route>
        </Switch>
      </Layout>
    </Router>
  );
};
