import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Beers from "./pages/Beers";
import NewBeer from "./pages/NewBeer";
import RandomBeer from "./pages/RandomBeer";
import HomePage from "./pages/HomePage";
import Home from "./layouts/Home";
import Section from "./layouts/Section";

const App = () => (
  <Router>
    <Switch>
      <Route
        path="/"
        exact
        component={() => (
          <Home>
            <HomePage />
          </Home>
        )}
      />
      <Route
        path="/beers"
        exact
        component={() => (
          <Section>
            <Beers />
          </Section>
        )}
      />
      <Route
        path="/beers/new"
        component={() => (
          <Section>
            <NewBeer />
          </Section>
        )}
      />
      <Route
        path="/beers/random"
        component={() => (
          <Section>
            <RandomBeer />
          </Section>
        )}
      />
    </Switch>
  </Router>
);

export default App;
