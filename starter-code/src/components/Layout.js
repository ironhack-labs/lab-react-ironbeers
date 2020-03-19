import React from "react";
import Header from "./Header";


const Layout = (props) => {

  return (
    <>
      <Header />
      <section className="container">{props.children}</section>
      
    </>
  );
};

export default Layout;