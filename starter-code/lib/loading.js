import React from "react";
import styled from "styled-components";
import gif from "../public/images/infinity.gif";

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0%;
  z-index: 10000;
  background: rgba(255, 255, 255, 1);
  img {
    width: 400px;
  }
`;

export const Loading = () => (
  <LoadingWrapper>
    <img src={gif} alt="beer gif for loading" />
  </LoadingWrapper>
);
