import React from "react";
import styled from "styled-components";

const DataContainer = styled.div`
  text-align: center;
`;

const Number = styled.p`
  font-size: 32px;
  font-weight: bold;
`;

const Data = ({ name, tagline, description, image }) => (
  <>
    <DataContainer>
      <Number>{name}</Number>
      <div>{tagline}</div>
      <div>{description}</div>
    </DataContainer>
  </>
);

export default Data;
