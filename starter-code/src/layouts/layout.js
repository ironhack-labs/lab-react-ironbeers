import React from "react";
import { Header } from "./header";

export const Layout = ({ children }) => {
  console.log(children);
  return (
    <>
      <Header />
      <div className="ctn-body">{children}</div>
    </>
  );
};
