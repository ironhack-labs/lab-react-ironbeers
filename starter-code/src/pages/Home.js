import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BeersImg from "../../public/images/beers.png";
import BeerRandomImg from "../../public/images/random-beer.png";
import NewBeerImg from "../../public/images/new-beer.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
`;

const MenuTitle = styled.h1`
  font-size: 1.5rem;
  color: #333;
  margin: 0;
  padding: 0 10px;
`;

const Ipsum = styled.p`
  font-size: 0.7rem;
  color: #999;
  padding: 0 10px;
`;

export const Home = () => (
  <Container>
    <Link to="beers">
      <Image src={BeersImg} alt="All beers" />
      <MenuTitle>All beers</MenuTitle>
      <Ipsum>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu
        venenatis urna, eget maximus turpis. Etiam ut finibus odio. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos.
      </Ipsum>
    </Link>
    <Link to="beer-random">
      <Image src={BeerRandomImg} alt="Random beer" />
      <MenuTitle>Random beer</MenuTitle>
      <Ipsum>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu
        venenatis urna, eget maximus turpis. Etiam ut finibus odio. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos.
      </Ipsum>
    </Link>
    <Link to="new-beer">
      <Image src={NewBeerImg} alt="New beer" />
      <MenuTitle>New beer</MenuTitle>
      <Ipsum>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu
        venenatis urna, eget maximus turpis. Etiam ut finibus odio. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos
      </Ipsum>
    </Link>
  </Container>
);
