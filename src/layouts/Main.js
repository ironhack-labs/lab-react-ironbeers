import React from "react";

import { Header } from "./Header";

export const Main = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);
