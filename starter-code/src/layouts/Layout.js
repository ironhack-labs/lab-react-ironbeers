import React from "react";
import Footer from "./Footer"

const Layout = ({ children }) => (
    <>
        <section className="container">{children}</section>
        <Footer />
    </>
);

export default Layout;