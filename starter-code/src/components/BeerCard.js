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

const Imperative = styled.p`
  color: #000;
  padding: 0;
  margin: 0px 20px;
  font-size: 0.8rem;
  font-weight: 400;
  padding: 10px 0 0;
`;

const SubTitle = styled.p`
  color: #ccc;
  padding: 10px 0 0;
  margin: 0px 20px;
  font-size: 1.2rem;
`;

export const BeerCard = props => {
  return (
    <Container>
      <ImageContainer>
        <Image src={props.image_url} />
      </ImageContainer>
      <Wrapper>
        <h4>{props.name}</h4>
        <SubTitle>{props.tagline}</SubTitle>
        <Imperative>
          <b>Contributor:</b> {props.contributed_by}
        </Imperative>
      </Wrapper>
    </Container>
  );
};
