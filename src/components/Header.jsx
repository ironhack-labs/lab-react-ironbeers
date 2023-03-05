import React from "react";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#03a9f4",
          height: "8vh",
        }}
      >
        <Link to="/">
          <i style={{ color: "white", fontSize: "6vh" }}>Go home</i>
        </Link>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
