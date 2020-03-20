import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Main } from "./layouts/Main";
import { HomePage } from "./pages/Home.page";
import { ListPage } from "./pages/List.page";
import { DetailPage } from "./pages/Detail.page";
import { CreatePage } from "./pages/Create.page";

import "./App.css";

export const App = () => (
  <Router>
    <Main>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/list" component={ListPage} />
        <Route path="/random" component={DetailPage} />
        <Route
          path="/detail/:id"
          component={({ match }) => <DetailPage id={match.params.id} />}
        />
        <Route path="/create" component={CreatePage} />
      </Switch>
    </Main>
  </Router>
);
