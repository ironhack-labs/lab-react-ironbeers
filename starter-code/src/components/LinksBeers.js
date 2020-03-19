import React from "react";
import CardBeers from "./CardBeers";
import CardRandomBeer from "./CardRandomBeer";
import NewBeer from "../NewBeer";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3em;
  flex-direction: column-reverse;
`;

const LinksBeers = function() {
  return (
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
    </Container>
  );
};

export default LinksBeers;
