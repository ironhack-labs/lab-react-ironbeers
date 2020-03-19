import React from "react";
import styled from "styled-components";

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
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
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

export const Beer = props => {
  return (
    <>
      <ImageContainer>
        <Image src={props.image_url} />
      </ImageContainer>
      <Line>
        <p>{props.name}</p>
        <p>{props.attenuation_level}</p>
      </Line>
      <Line>
        <p>{props.tagline}</p>
        <p>{props.first_brewed}</p>
      </Line>
      <Block>
        <p>{props.description}</p>
        <p>{props.contributed_by}</p>
      </Block>
    </>
  );
};
