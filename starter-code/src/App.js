import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../public/styles/App.css";
import Home from "./Home";
import Beers from "./Beers";
import CardRandomBeer from "./components/CardRandomBeer";
import NewBeer from "./NewBeer";
import CardBeers from "./components/CardBeers";
import Navbar from "./components/Navbar";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3em;
  align-items: center;
  flex-direction: column-reverse;
`;

export const App = () => {
  return (
    <>
      <Router>
        <Container>
          <nav>
            <Link to="/beers" style={{ textDecoration: "none" }}>
              <CardBeers />
            </Link>
            <Link to="/random-beer" style={{ textDecoration: "none" }}>
              <CardRandomBeer />
            </Link>
            <Link to="/new-beer" style={{ textDecoration: "none" }}>
              <NewBeer />
            </Link>
          </nav>
        </Container>{" "}
        <Switch>
          <Route path="/beers">
            <Beers />
          </Route>
          <Route path="/random-beer">
            <Navbar />
          </Route>
          <Route path="/new-beer">
            <Navbar />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
