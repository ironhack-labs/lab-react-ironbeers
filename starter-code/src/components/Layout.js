import React from "react";
import '../App.css';
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {

  return (
    <>
      <Header />
      <section className="cont">{props.children}</section>
      <Footer />
    </>
  );
};

export default Layout;