import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../public/styles/App.css";
import CardBeers from "./components/CardBeers";
import CardRandomBeer from "./components/CardRandomBeer";
import NewBeer from "./NewBeer";
import Navbar from "./components/Navbar";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3em;
  flex-direction: column-reverse;
`;

const Home = () => {
  return (
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
        <Switch>
          <div>
            <Route path="/home" />
            <Home />
          </div>
          <div>
            <Route exact path="/beers">
              <DataBeers />
            </Route>
          </div>
          <div>
            <Route exact path="/random-beer">
              <Navbar />
            </Route>
          </div>
          <div>
            <Route exact path="/new-beer"></Route>
          </div>
        </Switch>
      </Container>{" "}
    </Router>
  );
};

export default Home;
