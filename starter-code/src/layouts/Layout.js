import React from "react";
import Header from "./Header";
import Footer from "./Footer"

const Layout = ({ children }) => (
    <>
        <Header />
        <section className="container">{children}</section>
        <Footer />
    </>
);

export default Layout;