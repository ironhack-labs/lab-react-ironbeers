import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import BeerList from "./pages/BeerList";
import NewBeer from "./pages/NewBeer";
import RandomBeer from "./pages/RandomBeer";
import HomePage from "./pages/HomePage";
import Home from "./layouts/Home";
import Section from "./layouts/Section";
import BeerCard from "./components/BeerCard";
import { getBeers, BeerContextProvider } from "./api/beer.api";

const App = () => {
  return (
    <BeerContextProvider>
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
                <BeerList />
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
          <Route
            path={"/beers/card"}
            component={() => (
              <Section>
                <BeerCard />
              </Section>
            )}
          />
        </Switch>
      </Router>
    </BeerContextProvider>
  );
};

export default App;
