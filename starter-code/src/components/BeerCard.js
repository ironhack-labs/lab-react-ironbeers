import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-self: center;
  flex-direction: row;
  align-items: center;
  height: 200px;
  width: 100%;
  padding: 20px 0 40px;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Wrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  padding: 0 0 20px;
  h4 {
    color: #000;
    padding: 0;
    margin: 1rem 20px 0;
    font-size: 2rem;
    font-weight: 400;
  }
  p {
    color: #ccc;
    padding: 0;
    margin: 0px 20px;
    font-size: 1.5rem;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const ImageContainer = styled.div`
  width: 20%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 100%;
`;

export const BeerCard = props => {
  return (
    <Container>
      <ImageContainer>
        <Image src={props.image_url} />
      </ImageContainer>
      <Wrapper>
        <h4>{props.name}</h4>
        <p>{props.tagline}</p>
      </Wrapper>
    </Container>
  );
};
