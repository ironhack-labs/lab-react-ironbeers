import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import home from "../../public/images/casa.png";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const HomeImg = styled.img`
  width: 50px;
  display: flex;
`;
const NavHome = styled.div`
  width: 24rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Navbar = function() {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <NavHome className="navbar-dark bg-primary">
        <HomeImg src={home} className="card-img-top" alt="HomeLogo" />
      </NavHome>
    </Link>
  );
};

export default Navbar;
