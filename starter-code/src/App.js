import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./layout/layout";
import { Contain } from "./components/contain";

export const App = () => (
  <BrowserRouter>
    <Layout>
      <Contain />
    </Layout>
  </BrowserRouter>
);
