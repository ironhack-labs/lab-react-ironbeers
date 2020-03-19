import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "../pages/Home.page";
import { BeerPage } from "../pages/Beer.page";
import { withLoading } from "../../lib/withLoading";
import { SingleBeer } from "../pages/SingleBeer.page.js";
import { RandomBeer } from "../pages/RandomBeer.page.js";
import { NewBeer } from "../pages/NewBeer.page";

export const App = withLoading(() => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/beers" component={BeerPage} />
        <Route path="/beer/:id" component={SingleBeer} />
        <Route path="/random-beer" component={RandomBeer} />
        <Route path="/new-beer" component={NewBeer} />
      </Switch>
    </Router>
  );
});
