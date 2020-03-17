import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../components/Card";
import beers from "../../public/images/beers.png";
import randomBeer from "../../public/images/random-beer.png";
import newBeer from "../../public/images/new-beer.png";
import styled from "styled-components";

const pages = [
  {
    title: "All beers",
    img: beers,
    message: "Click here to see every beer in our DB",
    link: "/beers"
  },
  {
    title: "Random beer",
    img: randomBeer,
    message: "Click here to see a random and awesome beer",
    link: "/random-beer"
  },
  {
    title: "All beers",
    img: newBeer,
    message: "Click here to add a new and spectacular beer",
    link: "/new-beer"
  }
];

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomePage = () => {
  return (
    <Container>
      {pages.map((e, i) => {
        return (
          <Link to={e.link} key={i}>
            <Card {...e} key={i} />
          </Link>
        );
      })}
    </Container>
  );
};
