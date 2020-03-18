import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 80vw;
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
    width: 100vw;
  }
`;

const Image = styled.img`
  width: 100%;
`;

export const Card = ({ title, img, message }) => {
  return (
    <Wrapper>
      <Image src={img} />
      <h4>{title}</h4>
      <p>{message}</p>
    </Wrapper>
  );
};
