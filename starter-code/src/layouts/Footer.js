import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background: #0a7a06;
  padding: 50px 0;
  p {
    text-align: center;
    color: #ffffff;
  }
`;

export const Footer = () => {
  return (
    <>
      <StyledFooter>
        <p>© 2020 Iron Beers</p>
      </StyledFooter>
    </>
  );
};
