import React from "react";
import styled from "styled-components";
import beers from './../images/beers.png';
import randombeers from './../images/random-beer.png';
import newbeer from './../images/new-beer.png'
import { LoremIpsum } from 'react-lorem-ipsum';
import {Link} from "react-router-dom"

const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
margin: 0 auto;
width:100vw;
height:100vh;
`;

const Section = styled.section`
width:100vw;
height:33%;
background-color: lavenderblush;
`;

const ImgBeers = styled.div`
background-image: url(${beers});
background-size:cover;
width:100vw;
height:40%
`;

const ImgRandom = styled.div`
background-image: url(${randombeers});
background-size:cover;
width:100vw;
height:40%
`;

const ImgNew = styled.div`
background-image: url(${newbeer});
background-size:cover;
width:100vw;
height:40%
`;


const Home = () => {
  return <Container>
  <Section>
  <Link to="/beers">
  <ImgBeers></ImgBeers>
  <h2>All Beers</h2>
  <LoremIpsum avgSentencesPerParagraph={2}/>
  </Link>
  </Section>
  <Section>
  <Link to="/random-beer">
  <ImgRandom></ImgRandom>
  <h2>Random Beers</h2>
  <LoremIpsum avgSentencesPerParagraph={2}/>
  </Link>
  </Section>
  <Section>
  <Link to="/new-beer">
  <ImgNew></ImgNew>
  <h2>New Beer</h2>
  <LoremIpsum avgSentencesPerParagraph={2}/>
  </Link>
  </Section>
  </Container>
};

export default Home;