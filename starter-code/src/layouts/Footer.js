import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: #34dde3;
`;

export const Footer = () => {
  return (
    <Box>
      <p>Created by Luismi</p>
    </Box>
  );
};
