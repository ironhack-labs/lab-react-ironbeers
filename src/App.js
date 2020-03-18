import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Main } from "./layouts/Main";
import { Home } from "./pages/Home.page";

import "./App.css";

export const App = () => (
  <Router>
    <Main>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Main>
  </Router>
);
