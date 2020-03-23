import React from "react";
import styled from "styled-components";
import beers from "./../images/beers.png";
import randombeers from "./../images/random-beer.png";
import newbeer from "./../images/new-beer.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
`;

const Section = styled.section`
  width: 100vw;
  height: 33vh;
  background-color: white;
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
        <Link style={{ textDecoration: "none" }} to="/beers">
          <ImgBeers></ImgBeers>
          <h2 style={{ paddingLeft: "10px" }}>All Beers</h2>
        </Link>
        <p style={{ paddingLeft: "10px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          elementum lectus, rutrum mattis nunc.
        </p>
      </Section>
      <Section>
        <Link style={{ textDecoration: "none" }} to="/random-beer">
          <ImgRandom></ImgRandom>{" "}
          <h2 style={{ paddingLeft: "10px" }}>Random Beers</h2>
        </Link>
        <p style={{ paddingLeft: "10px" }}>
          Donec at quam sodales, consectetur purus id, viverra libero. Fusce
          varius enim eu elit facilisis efficitur.
        </p>
      </Section>
      <Section>
        <Link style={{ textDecoration: "none" }} to="/new-beer">
          <ImgNew></ImgNew>
          <h2 style={{ paddingLeft: "10px" }}>New Beer</h2>
        </Link>
        <p style={{ paddingLeft: "10px" }}>
          Fusce varius enim eu elit facilisis efficitur. Pellentesque nulla
          quam, rutrum id auctor ut, convallis vitae leo.
        </p>
      </Section>
    </Container>
  );
};

export default Home;
