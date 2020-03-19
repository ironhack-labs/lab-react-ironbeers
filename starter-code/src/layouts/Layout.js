import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Container } from "react-bootstrap";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <section>
          <Container fluid>{children}</Container>
        </section>
      </main>
      <Footer />
    </>
  );
};
