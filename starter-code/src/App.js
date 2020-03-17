import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../public/styles/App.css";
import Beers from "./Beers";
import RandomBeer from "./RandomBeer";
import NewBeer from "./NewBeer";

export const App = () => {
  return (
    <>
      <Router>
        <div>
          <nav>
            <Link to="/beers" style={{ textDecoration: "none" }}>
              <Beers />
            </Link>
            <Link to="/random-beer" style={{ textDecoration: "none" }}>
              <RandomBeer />
            </Link>

            <Link to="/new-beer" style={{ textDecoration: "none" }}>
              <NewBeer />
            </Link>
          </nav>
          <Switch>
            <Route path="/beers"></Route>
            <Route path="/random-beer"></Route>
            <Route path="/new-beer"></Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};
