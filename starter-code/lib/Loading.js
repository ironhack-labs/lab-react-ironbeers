import React from "react";
import styled from "styled-components";

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 10000;
  background: rgba(0, 0, 0, 0.85);
  img {
    width: 150px;
  }
`;

export const Loading = () => (
  <LoadingWrapper>
    <img
      src="https://media.giphy.com/media/KKCuBooszlPG0/giphy.gif"
      title="Loading"
      alt="Loading"
    />
  </LoadingWrapper>
);
