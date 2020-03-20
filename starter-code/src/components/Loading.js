import React from "react";
import styled from "styled-components";

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color:white;
  background-size:cover;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 10000;
  background: rgba(0, 0, 0, 0.5);
  img {
    width: 50px;
  }
`;

const Loading = () => (
  <LoadingWrapper>
    <img src="https://i.pinimg.com/originals/2b/7c/f2/2b7cf21b42bccf075a5dbe1b9586d477.gif" alt="loading" />
  </LoadingWrapper>
);

export default Loading;