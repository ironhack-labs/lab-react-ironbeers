import React from "react";
import styled from "styled-components";

const FooterSection = styled.header`
  align-content: center;
  background: #3e3e3e;
  display: flex;
  justify-content: center;
  padding: 12px 5px;
  width: 100%;
  p {
    margin: 0;
    padding: 0;
    color: #fff;
    font-size: 16px;
  }
`;
export const Footer = () => (
  <FooterSection>
    <p>&copy; 2020 Webdev Part time - Rubén Vaquero</p>
  </FooterSection>
);
