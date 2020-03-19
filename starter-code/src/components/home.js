import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
`;

const Tittle = styled.h1`
  font-size: 1.5rem;
  text-transform: uppercase;
  color: #333;
  margin: 0;
  padding: 0 10px;
`;

const Text = styled.p`
  font-size: 0.7rem;
  color: #999;
  padding: 0 10px;
`;

const Home = () => {
  return (
    <>
      <Link to="beers">
        <Image src="./images/beers.png" alt="All beers" />
        <Tittle>All beers</Tittle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis
          orci ut dui consequat, ac congue nibh ullamcorper. Vestibulum
          sollicitudin posuere felis ut vestibulum.
        </Text>
      </Link>
      <Link to="beer-random">
        <Image src="./images/random-beer.png" alt="Random beers" />
        <Tittle>Random beer</Tittle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis
          orci ut dui consequat, ac congue nibh ullamcorper. Vestibulum
          sollicitudin posuere felis ut vestibulum.
        </Text>
      </Link>
      <Link to="new-beer">
        <Image src="./images/new-beer.png" alt="New beer" />
        <Tittle>New beer</Tittle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis
          orci ut dui consequat, ac congue nibh ullamcorper. Vestibulum
          sollicitudin posuere felis ut vestibulum.
        </Text>
      </Link>
    </>
  );
};

export default Home;
