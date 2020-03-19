import React from "react";
import styled from "styled-components";
import beers from "./../images/beers.png";
import randombeers from "./../images/random-beer.png";
import newbeer from "./../images/new-beer.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
`;

const Section = styled.section`
  width: 100vw;
  height: 33%;
  background-color: lavenderblush;
`;

const ImgBeers = styled.div`
  background-image: url(${beers});
  background-size: cover;
  width: 100vw;
  height: 40%;
`;

const ImgRandom = styled.div`
  background-image: url(${randombeers});
  background-size: cover;
  width: 100vw;
  height: 40%;
`;

const ImgNew = styled.div`
  background-image: url(${newbeer});
  background-size: cover;
  width: 100vw;
  height: 40%;
`;

const Home = () => {
  return (
    <Container>
      <Section>
        <Link to="/beers">
          <ImgBeers></ImgBeers>
          <h2>All Beers</h2>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          elementum lectus, rutrum mattis nunc. Vivamus tempor turpis massa, sit
          amet bibendum elit rhoncus id. Nam vitae pharetra sapien. Suspendisse
          vel neque sem. Pellentesque porta finibus dolor, id lobortis velit
          posuere eget.
        </p>
      </Section>
      <Section>
        <Link to="/random-beer">
          <ImgRandom></ImgRandom> <h2>Random Beers</h2>{" "}
        </Link>
        <p>
          Donec at quam sodales, consectetur purus id, viverra libero. Fusce
          varius enim eu elit facilisis efficitur. Pellentesque nulla quam,
          rutrum id auctor ut, convallis vitae leo. Donec facilisis, sem non
          ultrices venenatis, metus sapien volutpat purus, vel viverra arcu odio
          porta mauris.
        </p>
      </Section>
      <Section>
        <Link to="/new-beer">
          <ImgNew></ImgNew>
          <h2>New Beer</h2>
        </Link>
        <p>
          Fusce varius enim eu elit facilisis efficitur. Pellentesque nulla
          quam, rutrum id auctor ut, convallis vitae leo. Donec facilisis, sem
          non ultrices venenatis, metus sapien volutpat purus, vel viverra arcu
          odio porta mauris.
        </p>
      </Section>
    </Container>
  );
};

export default Home;
