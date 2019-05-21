import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import AllBeers from "./components/AllBeers";
import Beer from "./components/Beer";
import BeerForm from "./components/BeerForm";

const Router = ({ beers, beer, handleChange, handleSubmit }) => (
  <Switch>
    <Route exact path="/" render={props => <Home {...props} beers={beers} />} />
    <Route
      exact
      path="/all-beers"
      render={props => <AllBeers {...props} beers={beers} />}
    />
    <Route exact path="/beer/:id" render={props => <Beer {...props} />} />
    <Route exact path="/random-beer" render={props => <Beer {...props} />} />
    <Route
      exact
      path="/new-beer"
      render={props => (
        <BeerForm
          {...props}
          {...beer}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    />
  </Switch>
);

export default Router;
