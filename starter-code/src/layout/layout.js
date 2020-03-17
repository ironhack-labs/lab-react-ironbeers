import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <h1>IronBeers</h1>
      <section>{children}</section>
      <Footer />
    </>
  );
};
