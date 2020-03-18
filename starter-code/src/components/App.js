import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "../pages/Home.page";
import { BeerPage } from "../pages/Beer.page";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={() => <HomePage />} />
        <Route path="/beers" component={() => <BeerPage />} />
      </Switch>
    </Router>
  );
};

export default App;
