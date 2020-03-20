import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { ContainerSection } from "../../public/styles/Layout";

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
