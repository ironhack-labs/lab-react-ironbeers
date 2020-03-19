import React from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    height: 30vh;
  }
`;

const Image = styled.img`
  height: 100%;
`;

const Line = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

const Block = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Title = styled.h3`
  color: #000;
  padding: 0;
  font-size: 2rem;
  font-weight: 400;
  margin: 0px;
`;

const SubTitle = styled.p`
  color: #ccc;
  padding: 0;
  margin: 0px;
  font-size: 1.5rem;
`;

const Imperative = styled.p`
  color: #000;
  padding: 0;
  margin: 0px;
  font-size: 1rem;
  font-weight: 700;
`;

export const Beer = props => {
  return (
    <>
      <ImageContainer>
        <Image src={props.image_url} />
      </ImageContainer>
      <Line style={{ marginTop: 50 }}>
        <Title>{props.name}</Title>
        <SubTitle>{props.attenuation_level}</SubTitle>
      </Line>
      <Line>
        <SubTitle>{props.tagline}</SubTitle>
        <Imperative>{props.first_brewed}</Imperative>
      </Line>
      <Block>
        <p>{props.description}</p>
        <Imperative>{props.contributed_by}</Imperative>
      </Block>
    </>
  );
};
