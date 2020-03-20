import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "./layouts/Layout";

import { HomePage } from "./pages/Home.page";
import { ListPage } from "./pages/List.page";
import { RamdomPage } from "./pages/Random.page";
import { NewPage } from "./pages/New.page";

export const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/beers" exact component={ListPage} />
          <Route path="/random-beer" exact component={RamdomPage} />
          <Route path="/new-beer" exact component={NewPage} />
        </Switch>
      </Layout>
    </Router>
  );
};
