import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import styled from "styled-components";

const ContainerSection = styled.section`
  display: block;
  margin: 0 auto;
  max-width: 768px;
  padding: 0 10px;
  width: 100%;
  h1 {
    color: #3c3c3c;
    font-size: 32px;
    text-align: center;
  }
  @media (max-width: 480px) {
    padding: 0 20px;
  }
`;

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <ContainerSection>
        <h1>IronBeers</h1>
        {children}
      </ContainerSection>
      <Footer />
    </>
  );
};
