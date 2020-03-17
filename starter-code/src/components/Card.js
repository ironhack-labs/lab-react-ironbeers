import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
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
